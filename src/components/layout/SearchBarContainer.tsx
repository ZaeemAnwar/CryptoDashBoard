import { Dispatch, SetStateAction } from 'react';
import { PortfolioButton, WatchListButton, SearchBar } from '..';
interface Props {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}
export default function LayoutSearch({ search, setSearch }: Props) {
  return (
    <div className='search-container'>
      <SearchBar search={search} setSearch={setSearch} />
      <WatchListButton />
      <PortfolioButton />
    </div>
  );
}