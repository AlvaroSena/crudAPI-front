import { useEffect, useState } from 'react';
import { ListGroup, } from 'react-bootstrap';
import { ProductsListItem } from './ProductListItem';

export function ProductsList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      getProducts().then(({ data }) => setProducts(data));
    }, [])
  
    async function getProducts() {
      const response = await fetch("http://localhost:8080/produtos");
      const data = await response.json();
  
      return {
        data,
      }
    }

    return (
        <ListGroup as="ol" numbered>
        {products.map(product => (
            <ProductsListItem
                id={product.id}
                nome={product.nome}
                descricao={product.descricao}
                preco={product.preco}
            />
        ))}
      </ListGroup>
    )
}