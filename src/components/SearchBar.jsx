import React from "react";
import TextField from "@mui/material/TextField";
import useSearchBar from "../hooks/useSearchBar";
function SearchBar() {
  const { onChangeSearchBar } = useSearchBar();
  return (
    <div>
      <TextField
        id="outlined-basic"
        placeholder="Search"
        variant="outlined"
        style={{ width: "100%", marginBottom: 15 }}
        onChange={onChangeSearchBar}
      />
    </div>
  );
}

export default SearchBar;
