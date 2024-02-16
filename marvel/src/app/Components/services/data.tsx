import { Character } from "@/app/typesdata/typesdata";
import api from "./api";

import { AxiosResponse } from "axios";


export const getCharacter = async (characterId: string) => {
   
      const response = api.get(`characters/${characterId}`)
      
      try {
    
        const response: AxiosResponse = await api.get(`characters/${characterId}`)
        
        const responseData: Character = response.data.data.results[0];
        
        return responseData
        
        } catch (error) {
        
        // Handle the error
        
        }
  };

export default getCharacter