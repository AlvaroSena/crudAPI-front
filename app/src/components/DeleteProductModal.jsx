import { useState } from 'react';
import { Trash2 } from "lucide-react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function DeleteProductModal({ productId, refetch }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function handleDeleteProduct() {
    const response = await fetch('http://localhost:8080/produtos/'.concat(productId), {
      method: 'delete',
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      await refetch();
    }

    console.log(response);
  }


  return (
      <>
        <Button variant="outline-danger" onClick={handleShow}>
          <Trash2 />
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Excluir produto</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              Tem certeza que deseja excluir este produto?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Fechar
            </Button>
            <Button variant="danger" onClick={() => handleDeleteProduct()}>
              Excluir produto
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}