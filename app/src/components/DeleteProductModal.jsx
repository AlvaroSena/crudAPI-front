import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Trash2 } from "lucide-react";

export function DeleteProductModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
              <Button variant="primary" onClick={handleClose}>
                Excluir produto
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
}