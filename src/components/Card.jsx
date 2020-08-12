import React from "react";
function card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img className="circle-img" src={props.imgsource} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p className="info"> {props.phone}</p>
        <p className="info">{props.email}</p>
      </div>
    </div>
  );
}
export default card;
