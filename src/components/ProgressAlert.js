import React from "react";

function ProgressAlert(props) {
  return (
    <div className="alert-container">
      <div className="alert">
        <label>{props.alertMsg}</label>
        <button className="close-btn" onClick={() => props.setShowAlert(false)}>
          X
        </button>
      </div>
    </div>
  );
}

export default ProgressAlert;
