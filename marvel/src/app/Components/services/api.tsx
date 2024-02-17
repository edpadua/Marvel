import axios from "axios";

import md5 from 'md5';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

const publicKey = process.env.NEXT_PUBLIC_API_PUBLIC_KEY

const privateKey = process.env.NEXT_PUBLIC_API_PRIVATE_KEY


const time = Number(new Date());

const privateK=privateKey!=null?privateKey:""

const hash = md5(time + privateK+ publicKey);

const api = axios.create({
  baseURL: baseURL,
  params: {
    ts: time,
    apikey: publicKey,
    hash: hash,
  }
})

export default api;


