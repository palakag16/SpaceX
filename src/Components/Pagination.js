import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const Pagination = ({ page, increment, decrement }) => {
  return (
    <>
      <div className="page_wrap">
        <div className="option" onClick={decrement}>
          <ArrowBackIosIcon />
        </div>
        <div className="option">{page}</div>
        <div className="option" onClick={increment}>
          <ArrowForwardIosIcon />
        </div>
      </div>
    </>
  );
};

export default Pagination;
