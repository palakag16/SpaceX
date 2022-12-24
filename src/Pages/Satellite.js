import React, { useEffect, useState } from "react";
import Search from "../Components/Search";
import SatelliteCard from "../Components/SatelliteCard";
import Pagination from "../Components/Pagination";
import { debounce } from "lodash";
import { useSelector, useDispatch } from "react-redux";
import {
  Searchquery,
  fetchAPIData,
  Pagechange,
} from "../redux/SpaceApi";
import Events from "../Components/Events";

const Satellite = ({type}) => {
  const [datalen, setDatalen] = useState();
  const [page, setpage] = useState(1);
  const dispatch = useDispatch();
  const Response = useSelector((state) => state);
  const types={
    satellite:"https://api.spacexdata.com/v3/payloads",
    history:"https://api.spacexdata.com/v3/history"
  }
  const fetchData = async () => {
    try {
      const res = await fetch(types[type]);
      const data = await res.json();
      setDatalen(data.length);
      dispatch(fetchAPIData(data));
      dispatch(Pagechange(page));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [type]);
  let COUNT_PER_PAGE = 18;
  const increment = () => {
    const len = datalen;
    const totalpage = Math.ceil(len / COUNT_PER_PAGE);
    if (page < totalpage) {
      setpage(page + 1);
    }
   
  };
  const decrement = () => {
    if (page > 1) {
      setpage(page - 1);
    }
  };

  var Getquery = debounce(function (e) {
    try {
      const query = e.target.value;
      dispatch(Searchquery({query,title:type=="history"?"title":"nationality"}));
    } catch (error) {
      console.log(error);
    }
  }, 2000);
  useEffect(() => {
   dispatch(Pagechange(page));
  }, [page])
  
 
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "2rem",
        }}
      >
        <div style={{ fontSize: "30px", fontWeight: "500",textTransform:"capitalize" }}>
          {type} Data
        </div>
        <Search title={type} Getquery={Getquery} />
      </div>

      <div className="card_grid_style">
        {Response.api.map((el) => {
          return (
            <div key={Math.random()*100}>
              {type=="history"?<Events data={el}/>:null}
              {type=="satellite"?<SatelliteCard data={el}/>:null}

            </div>
          );
        })}
      </div>
      <Pagination page={page} increment={increment} decrement={decrement} />
    </>
  );
};

export default Satellite;
