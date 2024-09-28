import { ListGroup, } from 'react-bootstrap';
import { EditProductModal } from '../components/EditProductModal';
import { DeleteProductModal } from '../components/DeleteProductModal';

export function ProductsListItem({ id, nome, descricao, preco }) {
    return (
        <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
            key={id}
        >
            <div className="ms-2 me-auto">
            <div className="fw-bold">{nome}</div>
            <p>
                {descricao}
            </p>
            <p>
                {Intl.NumberFormat('pt-br', {
                style: 'currency',
                currency: 'BRL',
                }).format(preco)}
            </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem' }}>
            <DeleteProductModal 
                productId={id} 
                refetch={async () => {
                const { data } = await getProducts();
                setProducts(data);
                }}  
            />
            <EditProductModal 
                productId={id}
                refetch={async () => {
                const { data } = await getProducts();
                setProducts(data);
                }}  
            />
            </div>
        </ListGroup.Item>
    )
}