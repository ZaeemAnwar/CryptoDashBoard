import { Dispatch, SetStateAction } from 'react';
import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

interface Props {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

export default function Search({ search, setSearch }: Props) {
  return (
    <div className='search-input'>
      <TextInput
        leftSection={<IconSearch />}
        value={search}
        onChange={(event) => setSearch(event.currentTarget.value)}
      />
    </div>
  );
}