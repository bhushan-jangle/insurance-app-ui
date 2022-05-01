import React from "react";

function Search(props) {
  //   const [searchChar, setSearchChar] = useState("");
  function handleSearch(e) {
    let searchChar = e.target.value.toLowerCase();
    const updatedInsuranceData = props.searchData.filter(
      (item) =>
        item.Policy_id.toLowerCase().includes(searchChar) ||
        item.Customer_id.toLowerCase().includes(searchChar)
    );
    props.setInsuranceData(updatedInsuranceData);
  }
  return (
    <div className="search-container">
      <input
        type="text"
        className="searchBar"
        placeholder="Search by policy id or customer id"
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
