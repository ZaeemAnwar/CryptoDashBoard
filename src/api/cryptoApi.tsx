import Axios from "axios";
import { CoinMarketType } from "../types";

export const fetchCryptoData  = async() => {
    const res = await Axios.get('/api/crypto')
    return res.data;
  }