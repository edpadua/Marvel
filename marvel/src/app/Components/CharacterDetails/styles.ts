import tw from "tailwind-styled-components"

export const CharacterContainer = tw.div`
min-w-full p-6 bg-white rounded-xl flex sm:flex-col lg:flex-row gap-4
`;

export const CharacterDescription = tw.p`
text-lg leading-6 
`;

export const CharacterName = tw.h2`
   text-xl font-bold pt-4 pb-4 sm:pt-0 text-primary
`;

export const CharacterMedia = tw.div`
w-1/2 sm:w-full 
`;

export const CharacterInfo = tw.div`
w-1/2 sm:w-full
`;
