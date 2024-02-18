import tw from "tailwind-styled-components"

export const Button = tw.button`
    bg-primary font-bold text-white  hover:bg-red-600  px-4 py-2 mt-button border-solid border-white border rounded-md text-base
`;

export const SearchBar = tw.div`
   w-full text-xs flex flex-row justify-end
`;

export const InputSearch = tw.input`
rounded-md text-slate-800 dark:border-none border-2 border-solid border-white lg:w-2/5 md:w-2/5 w-full px-2 h-8  mr-2 mt-search
`;