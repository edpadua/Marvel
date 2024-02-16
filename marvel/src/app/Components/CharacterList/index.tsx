"use client";

import React from "react";

import { List } from "./styles";

import { useContext} from "react";

import { ApiContextProvider } from "@/app/context/api.context"; 

import { ApiContext } from "@/app/context/api.context";



import CharacterCard from "../CharacterCard";

function CharacterList() {
    function useApiContext() {
  
        const context = useContext(ApiContext)
        if (context === null) {
          throw new Error('useApi must be used within a ApiContextProvider')
        }
        return context
    }


  const { characterList, setCharacterList, getCharacterList } = useApiContext();
 

  return (
    <List>
      {characterList ? (
        characterList.map((character, index) => (
          <CharacterCard key={character.id} character={character} />
        ))
      ) : (
        <p>Não encontrados</p>
      )}
    </List>
  );
}

export default CharacterList;
