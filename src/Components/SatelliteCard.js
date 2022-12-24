import React from "react";

const SatelliteCard = ({ data }) => {
  return (
    <div className="Eventcard_wrap">
      <div className="EC_title">{data.nationality||"N/A"}</div>
      <p className="EC_des">{data.manufacturer||"N/A"}</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="EC_des"> {data.payload_type||"N/A"}</div>
        <p className="EC_des">{data.orbit||"N/A"}</p>
      </div>
    </div>
  );
};

export default SatelliteCard;
