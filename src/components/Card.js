import React from "react";
import { Link } from "react-router-dom";
function Card(props) {
  return (
    <div className="card-container">
      {props.insuranceData.map((item) => (
        <div key={item.Policy_id} className="card">
          <h4 className="card-name">
            <label>Policy Id: </label>
            {item.Policy_id}
          </h4>
          <h4 className="card-role">
            <label>Customer Id: </label>
            {item.Customer_id}
          </h4>
          <p className="card-role">
            <label>Premium: </label>
            {item.Premium}
          </p>
          <p className="card-role">
            <label>Region: </label>
            {item.Customer_Region}
          </p>
          <p className="card-date">
            <label>Purchase Date: </label>
            {item.Date_of_Purchase}
          </p>
          <Link className="link" to={`/update/${item.Policy_id}`}>
            <button className="button" onClick={() => props.handleUpdate(item)}>
              Update
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Card;
