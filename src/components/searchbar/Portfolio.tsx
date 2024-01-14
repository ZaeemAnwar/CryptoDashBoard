import React from 'react';
import { Button } from '@mantine/core';
import { IconChartPie } from '@tabler/icons-react';

function Portfolio() {
  return (
    <Button
      variant='outline'
      color='var(--orange)'
      leftSection={<IconChartPie />}
    >
      Portfolio
    </Button>
  );
}

export default Portfolio;