import React from "react";
import '../About/About.css';



const Use_sec = (props) => {
  return (
    <>
      <div className="col-md-4">
        <div className="feature">
          <div className="icon_type">
            <img src={props.newName.imgs} alt="icon" width="60" height="60" />
          </div>
          <div className="icon_name">
            <h5>{props.newName.name}</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Use_sec;
