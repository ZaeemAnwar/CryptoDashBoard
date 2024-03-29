import { useQuery } from "@tanstack/react-query";
import { fetchCryptoData } from "../api/cryptoApi";
import React, { useEffect, useState } from 'react';
import { CoinMarketType } from "../types";
import { SearchBarContainer, LayoutChart, LayoutPaginator } from "../components";


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

  // State management to handle search
  const [search, setSearch] = useState('');
  const [filtered, setFiltered] = useState<undefined | CoinMarketType[]>(
    undefined
  );


  // Handle page changes and size fluctuations
  useEffect(() => {
    if(cryptoListingData){
      let foundOffering
      if(filtered && filtered?.length>0 ){
        foundOffering = filtered
      } else {
        foundOffering = cryptoListingData?.data
      }
      setPageSize(10)
     
      const start = (activePage - 1) * pageSize;
      const end = activePage * pageSize;

      // Force reset the page if a search has less results than current view page.
      if(activePage*pageSize>end){setPage(1)}
      
      const newChunk = foundOffering.slice(start, end);
      // console.log("Cuirrent chunk ", newChunk)
      setChunk(newChunk);
    }
  }, [activePage, cryptoListingData, filtered, pageSize]);

  // Add a layer for search results
  useEffect(() => {
    
    if(search.length===0 && cryptoListingData){
      setFiltered(cryptoListingData.data)
    }
    if(search.length>0 && cryptoListingData){
      setPage(1)
      let foundOffering = cryptoListingData.data
      const filteredData = foundOffering.filter((dat: { name: string; }) => {
        
       const match = dat.name.toLowerCase().includes(search.toLowerCase());
       return match
      });
      console.log(filteredData)
      // If there's at least 1 result after all the filters, it's worth setting the filtered data.
      if(filteredData.length>0){
        setFiltered(filteredData);
      } else 
        setFiltered(cryptoListingData)   
    }
  }, [search, cryptoListingData]);

  
  if (isError) {
    return (<div><h1> Server Error </h1>
    There seems to be a problem retreiving data. Probably check the network requests to see if the server is down or misconfigured.)
    </div>)
  };

  if (isLoading) {
    return (<div><h1>Initializing </h1>Fetching Crypto Information from backend.... hold tight!</div>)
  };

  return (
    <div className='container'>
          <h1>Crypto Dashboard</h1>
          <SearchBarContainer search={search} setSearch={setSearch} />
          <LayoutChart activePage={activePage} data={chunk} />
          <LayoutPaginator
            activePage={activePage}
            setPage={setPage}
            total={filtered? filtered.length/pageSize:0}
          />
        </div>
  );
};
