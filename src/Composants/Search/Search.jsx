import Results from "../Results/Results";
import Menu from "../Menu/Menu";
import "./Search.css";
import { useEffect, useState } from "react";

function WikiSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const getInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async () => {
    let response = await fetch(
      `https://fr.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${searchTerm}&format=json`
    );
    console.log("response : ", response);
    let data = await response.json();
    console.log("data : ", data);
    setSearchResults(data[3]);
    console.log(("searchResults :", searchResults));
    setSearchTerm("");
  };

  const showResponse = () => {
    return searchResults.map((item, key) => {
      return <Results key={key} lien={item} />;
    });
  };

  useEffect(() => {
    console.log("Value of search :", searchTerm), [searchTerm];
  });

  return (
    <header>
      <div>
        <Menu />
      </div>
      <div className="searchNav">
        <input
          type="text"
          id="searchbar"
          onChange={getInput}
          placeholder="Insert your search"
        ></input>
        <button className="valider" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="wikiResponse">{showResponse()}</div>
    </header>
  );
}

export default WikiSearch;
