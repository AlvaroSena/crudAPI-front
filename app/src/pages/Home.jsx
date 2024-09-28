import { useEffect, useState } from 'react';
import { Container, ListGroup, } from 'react-bootstrap';
import { CreateProductModal } from '../components/CreateProductModal';

import { ProductsList } from '../components/ProductsList';

export function Home() {
    return (
    <Container>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <h1>Produtos</h1>
          <CreateProductModal refetch={async () => {
            const { data } = await getProducts();
            setProducts(data);
          }} />
        </div>
        <ProductsList />
      </Container>
    )
}