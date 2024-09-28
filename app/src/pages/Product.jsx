import { useEffect, useState } from "react";
import { Container, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ProductsListItem } from "../components/ProductListItem";

export function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        getProductById().then(({ data }) => setProduct(data));
    }, [])

    async function getProductById() {
        const response = await fetch('http://localhost:8080/produtos/'.concat(id));
        const data = await response.json();

        return {
            data,
        }
    }

    return (
        <Container>
            {!product ? (
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <h1>Ops! Produto não existe</h1>
                </div>  
            ) : (
                <>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <h1>{product?.nome}</h1>
                    </div>
                    <ListGroup as="ol" numbered>
                        <ProductsListItem 
                            id={product?.id}
                            nome={product?.nome}
                            descricao={product?.descricao}
                            preco={product?.preco}
                        />
                    </ListGroup>
                
                </>
            )}
        </Container>
    )
}