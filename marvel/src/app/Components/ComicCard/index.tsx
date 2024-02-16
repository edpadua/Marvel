import { FC } from 'react'

import { Comic } from '@/app/typesdata/typesdata';

import { Card, ItemText } from "./styles";

import Image from "next/image";

interface ComicCardProps {
    comic: Comic;
  }

const ComicCard: FC<ComicCardProps> = ({ comic }) => {
  return (
    <Card>
        <Image
        src={`${comic?.thumbnail.path}.${comic.thumbnail.extension}`}
        alt={comic.title}
        
        width={500}
        height={400}
      />
        <ItemText>{comic.title}</ItemText>
    </Card>
  )
}

export default ComicCard
