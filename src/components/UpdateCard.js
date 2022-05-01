import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function UpdateCard(props) {
  const [currFormData, setCurrFormData] = useState(props.selectedData);
  const [isValid, setIsValid] = useState(true);
  console.log("selectedData", props.selectedData);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    console.log("currFormData", currFormData);
    props.setShowAlert(true);
    props.setAlertMsg("Update in progress...");
    fetch("http://localhost:5000/users/updateInsuranceDetails", {
      method: "PUT",
      headers: {
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        ACCEPT: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(currFormData),
    })
      .then((result) => {
        result.json().then((resp) => {
          if (resp.success) {
            console.log(resp.message);
            props.setAlertMsg(resp.message);
            props.setIsDataUpdate(!props.isDataUpdate);
            navigate("/");
            // props.setShowAlert(false);
          } else if (resp.error) {
            console.log(resp.message);
            props.setAlertMsg(resp.message);
            // props.setShowAlert(false);
          }
        });
      })
      .catch((err) => console.log(err));
    //props.setShowAlert(false);
  }

  function handlePremium(e) {
    if (Number(e.target.value) > 1000000) {
      props.setShowAlert(true);
      setIsValid(false);
      props.setAlertMsg("Premium should not be more than 1 million");
    } else {
      props.setShowAlert(false);
      setIsValid(true);
      setCurrFormData({ ...currFormData, Premium: e.target.value });
    }
  }

  return (
    <div className="form-body">
      <form className="form-update" onSubmit={handleSubmit}>
        <div className="input-container">
          <label className="input-label">Policy Id : </label>
          <input
            type="text"
            className="inputbox"
            value={currFormData.Policy_id}
            placeholder="Policy Id"
            readOnly={true}
          />
        </div>
        <div className="input-container">
          <label className="input-label">Date_of_Purchase : </label>
          <input
            type="text"
            className="inputbox"
            value={currFormData.Date_of_Purchase}
            placeholder="Date_of_Purchase"
            readOnly={true}
          />
        </div>
        <div className="input-container">
          <label className="input-label">Customer_id : </label>
          <input
            type="text"
            className="inputbox"
            value={currFormData.Customer_id}
            placeholder="Customer_id"
            readOnly={true}
          />
        </div>
        <div className="input-container">
          <label className="input-label">Fuel : </label>
          <input
            type="text"
            className="inputbox"
            value={currFormData.Fuel}
            placeholder="Fuel"
            onChange={(e) =>
              setCurrFormData({ ...currFormData, Fuel: e.target.value })
            }
          />
        </div>
        <div className="input-container">
          <label className="input-label">VEHICLE_SEGMENT : </label>
          <input
            type="text"
            className="inputbox"
            value={currFormData.VEHICLE_SEGMENT}
            placeholder="VEHICLE_SEGMENT"
            onChange={(e) =>
              setCurrFormData({
                ...currFormData,
                VEHICLE_SEGMENT: e.target.value,
              })
            }
          />
        </div>
        <div className="input-container">
          <label className="input-label">Premium : </label>
          <input
            type="text"
            className="inputbox"
            value={currFormData.Premium}
            placeholder="Premium"
            onChange={handlePremium}
          />
        </div>
        <div className="input-container">
          <label className="input-label">bodily_injury_liability : </label>
          <input
            type="text"
            className="inputbox"
            value={currFormData.bodily_injury_liability}
            placeholder="bodily_injury_liability"
            onChange={(e) =>
              setCurrFormData({
                ...currFormData,
                bodily_injury_liability: e.target.value,
              })
            }
          />
        </div>
        <div className="input-container">
          <label className="input-label">personal_injury_protection : </label>
          <input
            type="text"
            className="inputbox"
            value={currFormData.personal_injury_protection}
            placeholder="personal_injury_protection"
            onChange={(e) =>
              setCurrFormData({
                ...currFormData,
                personal_injury_protection: e.target.value,
              })
            }
          />
        </div>
        <div className="input-container">
          <label className="input-label">property_damage_liability : </label>
          <input
            type="text"
            className="inputbox"
            value={currFormData.property_damage_liability}
            placeholder="property_damage_liability"
            onChange={(e) =>
              setCurrFormData({
                ...currFormData,
                property_damage_liability: e.target.value,
              })
            }
          />
        </div>
        <div className="input-container">
          <label className="input-label">Customer_Region : </label>
          <input
            type="text"
            className="inputbox"
            value={currFormData.Customer_Region}
            placeholder="Customer_Region"
            onChange={(e) =>
              setCurrFormData({
                ...currFormData,
                Customer_Region: e.target.value,
              })
            }
          />
        </div>
        <div className="input-container">
          <label className="input-label">comprehensive : </label>
          <input
            type="text"
            className="inputbox"
            value={currFormData.comprehensive}
            placeholder="comprehensive"
            onChange={(e) =>
              setCurrFormData({
                ...currFormData,
                comprehensive: e.target.value,
              })
            }
          />
        </div>
        <div className="input-container">
          <label className="input-label">Customer_Gender : </label>
          <input
            type="text"
            className="inputbox"
            value={currFormData.Customer_Gender}
            placeholder="Customer_Gender"
            onChange={(e) =>
              setCurrFormData({
                ...currFormData,
                Customer_Gender: e.target.value,
              })
            }
          />
        </div>
        <div className="input-container">
          <label className="input-label">Customer_Income_group : </label>
          <input
            type="text"
            className="inputbox"
            value={currFormData.Customer_Income_group}
            placeholder="Customer_Income_group"
            onChange={(e) =>
              setCurrFormData({
                ...currFormData,
                Customer_Income_group: e.target.value,
              })
            }
          />
        </div>
        <div className="input-container">
          <label className="input-label">Customer_Marital_status : </label>
          <input
            type="text"
            className="inputbox"
            value={currFormData.Customer_Marital_status}
            placeholder="Customer_Marital_status"
            onChange={(e) =>
              setCurrFormData({
                ...currFormData,
                Customer_Marital_status: e.target.value,
              })
            }
          />
        </div>
        <div className="button-container">
          <button
            type="button"
            className="button btn-medium"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>
          <button
            type="submit"
            className={
              isValid ? "button btn-medium" : "button btn-medium btn-disable"
            }
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateCard;
