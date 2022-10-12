import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import ItemsList from '../components/ItemsList/ItemList';
import ShopPagination from '../components/ShopPagination/ShopPagination';

type Props = {
  items: Item[];
};

type Item = {
  _id: string;
  Name: string;
  Brand: string;
  Price: number;
  ImagePath: string;
};

export default function Shop({ items }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const lastPage = items.length / itemsPerPage;

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <Container className="mt-5 mb-5" fluid>
      <ItemsList items={currentItems} />
      <ShopPagination
        paginate={paginate}
        currentPage={currentPage}
        lastPage={lastPage}
      />
    </Container>
  );
}
