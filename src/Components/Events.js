import React from "react";
import moment from "moment/moment";
const Events = ({data}) => {
  return (
    <>
      <div className="Eventcard_wrap">
        <div className="EC_title">{data?.title?.slice(0,25)||"N/A"}</div>
        <p className="EC_des">{data?.details?.slice(0,45)||"N/A"}</p>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <div className="EC_des"> Flight No-{data.flight_number||"0"}</div>
          <p className="EC_des">Date-{moment(data?.event_date_utc).format('DD/MM/YYYY')||"N/A"}</p>
        </div>
      </div>
    </>
  );
};

export default Events;
