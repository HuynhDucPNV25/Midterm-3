import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { get } from "../../apis/api";
import Users from "./Users";

export const Search = () => {
  const [query, setQuery] = useState("");
  const [searchedData, setSearchedData] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const searchDataFromStorage = JSON.parse(
      localStorage.getItem("searchedData")
    );
    const searchQueryFromStorage = JSON.parse(
      localStorage.getItem("searchQuery")
    );
    if (searchDataFromStorage && searchQueryFromStorage) {
      setSearchedData(searchDataFromStorage);
      setQuery(searchQueryFromStorage);
      history.push(`/?query=${searchQueryFromStorage}`);
    }
  }, [history]);

  async function searchUsers() {
    try {
      const response = await get(`search/users?q=${query} `);
      setSearchedData(response.items);
      localStorage.setItem("searchQuery", JSON.stringify(query));
      localStorage.setItem("searchedData", JSON.stringify(response.items));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const clearUsers = () => {
    setSearchedData([]);
    setQuery("");
    localStorage.removeItem("searchQuery");
    localStorage.removeItem("searchedData");
    history.push('');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (query === "") {
      alert("Please enter something");
    } else {
      searchUsers();
      history.push(`/?query=${query}`);
      setQuery("");
    }
  };

  const onChange = (e) => setQuery(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder={query ? query : "Search User"}
          value={query}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-success btn-block"
        />
      </form>
      {searchedData.length > 0 && (
        <button className="btn btn-danger btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
      <Users users={searchedData} />
    </div>
  );
};
export default Search;