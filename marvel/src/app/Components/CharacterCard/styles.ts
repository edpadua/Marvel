
import tw from "tailwind-styled-components"

export const Card = tw.div`
 min-w-full p-6 bg-white dark:bg-slate-800 dark:text-white rounded-md  transition-all 
`;


export const ItemText = tw.h3`
 text-xl font-bold py-2 
`;

export const ItemLink = tw.a`
   text-base font-bold pt-2 hover:text-red-600 text-primary block
`;