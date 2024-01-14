import React from 'react';
import { Button } from '@mantine/core';
import { IconStar } from '@tabler/icons-react';

export default function WatchList() {
  return (
    <Button
      variant='outline'
      color='var(--orange)'
      className='watchlist'
      leftSection={<IconStar />}
    >
      Watchlist
    </Button>
  );
}