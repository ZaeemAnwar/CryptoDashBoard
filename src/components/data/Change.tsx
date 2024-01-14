import React from 'react';
import { Badge } from '@mantine/core';
import { IconCaretUpFilled, IconCaretDownFilled } from '@tabler/icons-react';

interface Props {
  change: number | null;
}

export default function Change({ change }: Props) {
  const num = change ? (change * 100).toFixed(2) + '%' : null;
  if (change && change > 0) {
    return (
      <Badge
        leftSection={<IconCaretUpFilled />}
        variant='light'
        color='#00cf80'
      >
        {num}
      </Badge>
    );
  }
  if (change && change < 0) {
    return (
      <Badge
        variant='light'
        leftSection={<IconCaretDownFilled />}
        color='#ff004d'
      >
        {num}
      </Badge>
    );
  }
  return <Badge variant='light'>NO</Badge>;
}
