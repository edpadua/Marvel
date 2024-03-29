"use client";

import { Character, ApiContextType } from "../typesdata/typesdata";

import { createContext, useContext, useState, useEffect } from "react";

import api from "../Components/services/api";

export const ApiContext = createContext<ApiContextType | null>(null);

export const ApiContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [characterList, setCharacterList] = useState<Character[]>([]);
  const [search, setSearch]=useState("");

  const searchCharacter = async (search: string) => {
    api
      .get(`characters?nameStartsWith=${search}&limit=99`)
      .then((response) => {
       
        console.log("results search",response.data.data.results)
        setCharacterList(response.data.data.results);
      })
      .catch((err) => console.log(err));
  };

  const getQuery = ()=>{
     
  }

  const getCharacterList = async () => {
    const query=search!=""?`characters?nameStartsWith=${search}&limit=100`:"characters?&limit=100"
    api
      .get(query)
      .then((response) => {
        console.log("BaseUrl",process.env.NEXT_PUBLIC_API_BASE_URL)
        console.log("results",response.data.data.results)
        setCharacterList(response.data.data.results);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCharacterList();
    
  }, []);


  

  return (
    <ApiContext.Provider
      value={{ characterList, setCharacterList, getCharacterList, search, setSearch  }}
    >
      {children}
    </ApiContext.Provider>
  );
};



export function useApiContext() {
  
    const context = useContext(ApiContext)
    if (context === null) {
      throw new Error('useApi must be used within a ApiContextProvider')
    }
    return context
}
