import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import List from "../list/list.component";

const SearchForm = (props) => {
  const { onSearch, serchInput } = props;

  return (
    <form>
      <label>
        <FontAwesomeIcon icon={faSearch} />
        <input
          placeholder="Search by title"
          onChange={onSearch}
          value={serchInput}
        ></input>
      </label>
    </form>
  );
};
export default SearchForm;
