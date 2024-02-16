"use client";

import React from "react";

import { FC } from "react";

import ComicList from "@/app/Components/ComicList";

import CharacterDetails from "@/app/Components/CharacterDetails";

import { PageSection, PageSectionTitle } from "@/app/styles";

interface CharacterPageProps {
  params: {
    id: string;
  };
}

const CharacterPage: FC<CharacterPageProps> = ({ params }) => {
  const { id } = params;

  return (
    <>
      <PageSection>
        <PageSectionTitle>Character</PageSectionTitle>
        <CharacterDetails characterId={id} />
      </PageSection>
      <PageSection>
        <PageSectionTitle>Comic List</PageSectionTitle>
        <ComicList characterId={id} />
      </PageSection>
    </>
  );
};

export default CharacterPage;
