"use client";

import React from "react";

import { Button, InputSearch, SearchBar } from "./styles";

import { useContext } from "react";

import { ApiContext } from "@/app/context/api.context";

function Search() {

  function useApiContext() {
  
    const context = useContext(ApiContext)
    if (context === null) {
      throw new Error('useApi must be used within a ApiContextProvider')
    }
    return context
}

  const {search,setSearch, getCharacterList} = useApiContext();

  return (
    <SearchBar>
      <InputSearch
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        placeholder="Type the Character you are looking for ..."
      />
      <Button onClick={getCharacterList}>Search</Button>
    </SearchBar>
  );
}

export default Search;
