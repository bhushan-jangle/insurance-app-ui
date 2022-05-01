import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "../App.scss";
import Chart from "./Chart";
import Dashboard from "./Dashboard";
import ProgressAlert from "./ProgressAlert";
import UpdateCard from "./UpdateCard";

function Main(props) {
  const [selectedData, setSelectedData] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("Update in progress...");
  function handleUpdate(value) {
    setSelectedData(value);
  }
  return (
    <div className="main">
      <nav className="nav">
        <div className="nav-item-container">
          <Link to="/" className="link">
            <li>Dashboard</li>
          </Link>
        </div>
        <div className="nav-item-container">
          <Link to="/graph" className="link">
            <li>Graphs</li>
          </Link>
        </div>
      </nav>
      <section className="section-body">
        {showAlert && (
          <ProgressAlert alertMsg={alertMsg} setShowAlert={setShowAlert} />
        )}
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Dashboard
                insuranceData={props.insuranceData}
                searchData={props.searchData}
                setInsuranceData={props.setInsuranceData}
                handleUpdate={handleUpdate}
              />
            }
          />
          <Route
            path="/update/:id"
            element={
              <UpdateCard
                selectedData={selectedData}
                isDataUpdate={props.isDataUpdate}
                setIsDataUpdate={props.setIsDataUpdate}
                setShowAlert={setShowAlert}
                setAlertMsg={setAlertMsg}
              />
            }
          />

          <Route
            path="/graph"
            element={<Chart insuranceData={props.insuranceData} />}
          />
        </Routes>
      </section>
    </div>
  );
}

export default Main;
