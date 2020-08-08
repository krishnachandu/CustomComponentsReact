import React from "react";
function card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2>{props.contact}</h2>
        <img src={props.imgsource} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p>{props.phone}</p>
        <p>{props.email}</p>
      </div>
    </div>
  );
}
export default card;
