import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

import './ShopPagination.scss';

type Props = {
  paginate: any;
  currentPage: number;
  lastPage: number;
};

export default function ShopPagination({
  paginate,
  currentPage,
  lastPage,
}: Props) {
  let numbers: any[] = [];
  for (let number = 1; number <= lastPage; number++) {
    numbers.push(
      <Pagination.Item
        key={number}
        active={currentPage === number}
        onClick={() => paginate(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return <Pagination className="pagination mt-5">{numbers}</Pagination>;
}
