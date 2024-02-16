"use client";

import React from "react";

import { Card, ItemText, ItemLink } from "./styles";

import { Character } from "@/app/typesdata/typesdata";

import { FC } from "react";

import Image from "next/image";

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: FC<CharacterCardProps> = ({ character }) => {
  return (
    <Card>
      <Image
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
        
        width={500}
        height={400}
      />
      <ItemText>
      {character.name}
      </ItemText>

      <ItemLink href={`character/${character.id}`}>More details</ItemLink>
    </Card>
  );
};

export default CharacterCard;
