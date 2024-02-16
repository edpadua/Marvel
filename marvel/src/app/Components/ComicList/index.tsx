import React from "react";

import { Comic } from "@/app/typesdata/typesdata";

import { FC, useState, useEffect } from "react";

import api from "@/app/Components/services/api";

import ComicCard from "@/app/Components/ComicCard";

import { List } from "./styles";

interface ComicListProps {
  characterId: string;
}

const ComicList: FC<ComicListProps> = ({ characterId }) => {
  const [comicList, setComicList] = useState<Comic[]>([]);

  const getComics = async (characterId: string) => {
    api
      .get(`/characters/${characterId}/comics`)
      .then((response) => {
        console.log("comic results", response.data.data.results);
        setComicList(response.data.data.results);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getComics(characterId);
  }, []);

  return (
    <List>
      {comicList ? (
        comicList.map((comic, index) => (
          <ComicCard key={comic.id} comic={comic} />
        ))
      ) : (
        <p>Não encontrados</p>
      )}
    </List>
  );
};

export default ComicList;
