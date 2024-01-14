import React from 'react';
import { Table } from '@mantine/core';
import { CoinMarketType } from '../../types';
import { DataChange } from '..';

interface Props {
  activePage: any;
  data: CoinMarketType[] | undefined;
}

export default function Chart({ activePage, data }: Props) {
  const numberShorten = (num: number) => {
    const thousand = 1000;
    const million = 1000000;
    const billion = 1000000000;
    if (num / billion > 1) {
      return (num / billion).toFixed(3) + 'B';
    } else if (num / million > 1) {
      return (num / million).toFixed(3) + 'M';
    } else if (num / thousand > 1) {
      return (num / thousand).toFixed(3) + 'K';
    }
    return num;
  };
  console.log(data);
  const rows = data ? (
    data.map((element) => (
      <Table.Tr key={element.name}>
        <Table.Td>{element.name}</Table.Td>
        <Table.Td>{element.quote['USD'].price.toFixed(2)}</Table.Td>
        <Table.Td>{element.self_reported_market_cap}</Table.Td>
        <Table.Td>{numberShorten(element.circulating_supply)}</Table.Td>
        <Table.Td>
          <DataChange change={element.quote['USD'].percent_change_24h} />
        </Table.Td>
        <Table.Td>{element.num_market_pairs}</Table.Td>
        <Table.Td>{element.num_market_pairs}</Table.Td>
      </Table.Tr>
    ))
  ) : (
    <></>
  );
  return (
    <div className='chart'>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Name</Table.Th>
            <Table.Th>Price</Table.Th>
            <Table.Th>Market Cap</Table.Th>
            <Table.Th>Circulating Supply</Table.Th>
            <Table.Th>Change %</Table.Th>
            <Table.Th>Last (24H)</Table.Th>
            <Table.Th>Favourite</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </div>
  );
}
