import "./allStocks.css";
import React, { PureComponent } from "react";
import SearchIcon from "@material-ui/icons/Search";

class AllStocks extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: "",
    };
  }

  render() {
    return (
      <div className="allStocks-container">
        <div className="stock-search-container">
          <input placeholder="Search For a Stock" />

          <SearchIcon onClick={() => alert("hey")} fontSize="large" />
        </div>
      </div>
    );
  }
}

export default AllStocks;
