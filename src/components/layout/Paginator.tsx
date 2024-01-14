import { Pagination } from '@mantine/core';
// import '@mantine/core/styles/Pagination.css';

interface Props {
  activePage: any;
  setPage: any;
  total: number;
}

function Paginator({ activePage, setPage, total }: Props) {
  return (
    <Pagination total={total} value={activePage} onChange={setPage} mt='sm' />
  );
}
export default Paginator;
