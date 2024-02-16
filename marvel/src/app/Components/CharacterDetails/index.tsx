import React from "react";

import { FC, useState, useEffect } from "react";

import { Character } from "@/app/typesdata/typesdata";

import api from "@/app/Components/services/api";

import Image from "next/image";

import {
  CharacterContainer,
  CharacterDescription,
  CharacterName,
  CharacterMedia,
  CharacterInfo,
} from "./styles";

interface CharacterDetailsProps {
  characterId: string;
}

const CharacterDetails: FC<CharacterDetailsProps> = ({ characterId }) => {
  const [character, setCharacter] = useState<Character>({
    id: 0,
    name: "",
    description: "",
    thumbnail: {
      path: "",
      extension: "",
    },
  });

  const getCharacter = async (characterId: string) => {
    api
      .get(`characters/${characterId}`)
      .then((response) => {
        console.log("BaseUrl", process.env.NEXT_PUBLIC_API_BASE_URL);
        console.log("results", response.data.data.results[0]);
        setCharacter(response.data.data.results[0]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCharacter(characterId);
  }, []);

  return (
    <CharacterContainer>
      <CharacterMedia>
        {character.thumbnail.path != "" ? (
          <Image
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        ) : (
          <></>
        )}
      </CharacterMedia>
      <CharacterInfo>
        <CharacterName>{character.name}</CharacterName>
        <CharacterDescription>{character.description}</CharacterDescription>
      </CharacterInfo>
    </CharacterContainer>
  );
};

export default CharacterDetails;
