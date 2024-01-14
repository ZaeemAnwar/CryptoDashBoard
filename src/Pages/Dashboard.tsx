import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const Dashboard = () => {
  
      const fetchCryptoData  = async() => {
        const res = await Axios.get('/api/crypto')
        return res.data;
      }

      const {
        data: cryptoListingData,
        isLoading,
        isError,
      } = useQuery({queryKey: ["cryptoInfo"], queryFn: fetchCryptoData, refetchInterval: 60000,
    })

  if (isError) {
    return <h1> Sorry, there was an error </h1>;
  }

  if (isLoading) {
    return <h1>Fetching Crypto Information from backend....</h1>;
  }

  return (
    <h1>
      This is the home page <p>{JSON.stringify(cryptoListingData)}</p>
    </h1>
  );
};
