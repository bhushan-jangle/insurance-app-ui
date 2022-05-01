import React, { useEffect, useState } from "react";
import "./App.scss";
import Main from "./components/Main";

function App() {
  const [insuranceData, setInsuranceData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [isDataUpdate, setIsDataUpdate] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/users/getAllUsers")
      .then((response) => response.json())
      .then((resp) => {
        console.log("resp", resp.users[0].insuranceDetails);
        setInsuranceData(resp.users[0].insuranceDetails);
        setSearchData(resp.users[0].insuranceDetails);
      });
  }, [isDataUpdate]);

  return (
    <div className="app">
      <Main
        insuranceData={insuranceData}
        searchData={searchData}
        setInsuranceData={setInsuranceData}
        isDataUpdate={isDataUpdate}
        setIsDataUpdate={setIsDataUpdate}
      />
    </div>
  );
}

export default App;
