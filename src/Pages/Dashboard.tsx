import { useQuery } from "@tanstack/react-query";
import { fetchCryptoData } from "../api/cryptoApi";
import React, { useEffect, useState } from 'react';
import { CoinMarketType } from "../types";
import { LayoutSearchBar, LayoutChart, LayoutPaginator } from "../components";


export const Dashboard = () => {

  // This uses ReactQuery to refresh the crypto data every minute by asking the Express server for it.
  const {
    data: cryptoListingData,
    isLoading,
    isError,
    } = useQuery({queryKey: ["cryptoInfo"], queryFn: fetchCryptoData, refetchInterval: 60000,
    })

  // State management to handle the pagination.
  const [activePage, setPage] = useState(1);
  const [chunk, setChunk] = useState<undefined | CoinMarketType[]>(undefined);
  const [pageSize, setPageSize] = useState(0);

  // Load up the data 
  useEffect(() => {
    if(cryptoListingData){
      let foundOffering = cryptoListingData?.data
      console.log("Data found, ", foundOffering)
      setPageSize(foundOffering.length / 10)
      const start = (activePage - 1) * pageSize;
      const end = activePage * pageSize;
      const newChunk = foundOffering.slice(start, end);
      console.log("Cuirrent chunk ", newChunk)
      setChunk(newChunk);
    }
  }, [activePage, cryptoListingData, pageSize]);

  
  if (isError) {
    return <h1> There seems to be a problem retreiving data. Probably check the network requests to see if the server is down or misconfigured.</h1>;
  }

  if (isLoading) {
    return <h1>Fetching Crypto Information from backend.... hold tight!</h1>;
  }

  return (
    <div className='container'>
          <LayoutSearchBar />
          <LayoutChart activePage={activePage} data={chunk} />
          <LayoutPaginator
            activePage={activePage}
            setPage={setPage}
            total={pageSize}
          />
        </div>
  );
};
