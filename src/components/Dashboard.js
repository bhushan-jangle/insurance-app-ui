import React from "react";
import Card from "./Card";
import Search from "./Search";

function Dashboard(props) {
  return (
    <div>
      <Search
        insuranceData={props.insuranceData}
        searchData={props.searchData}
        setInsuranceData={props.setInsuranceData}
      />
      <Card
        insuranceData={props.insuranceData}
        handleUpdate={props.handleUpdate}
      />
    </div>
  );
}

export default Dashboard;
