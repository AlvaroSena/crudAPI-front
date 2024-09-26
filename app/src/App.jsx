import { Container, Row, Col, Button, ListGroup, Badge } from 'react-bootstrap';
import { Trash2 } from "lucide-react";
import { CreateProductModal } from './components/CreateProductModal';
import { EditProductModal } from './components/EditProductModal';
import { DeleteProductModal } from './components/DeleteProductModal';

export function App() {
  return (
    <Container>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <h1>Produtos</h1>
        <CreateProductModal />
      </div>
        <ListGroup as="ol" numbered>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Subheading</div>
              Cras justo odio
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem' }}>
              <DeleteProductModal />
              <EditProductModal />
            </div>
          </ListGroup.Item>
        </ListGroup>
    </Container>
  )
}