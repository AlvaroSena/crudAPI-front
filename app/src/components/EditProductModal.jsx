import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from "react-bootstrap";
import { Pencil } from "lucide-react";

export function EditProductModal({ productId, refetch }) {
    const [show, setShow] = useState(false);
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState(0);
    const [estoque, setEstoque] = useState(0);
    const [userInsert, setUserInsert] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    async function handleSubmitForm(event) {
      event.preventDefault();

      const response = await fetch('http://localhost:8080/produtos/'.concat(productId), {
        method: 'put',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome,
          descricao,
          estoque,
          preco,
          user_insert: userInsert,
        }),
      });

      if (response.status === 201) {
        await refetch();
        handleClose();
        setNome('');
        setDescricao('');
        setPreco(0);
        setEstoque(0);
        setUserInsert('');
      }
    }

    return (
        <>
          <Button variant="secondary" onClick={handleShow}>
            <Pencil />
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Editar produto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleSubmitForm}>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Nome do produto</Form.Label>
                      <Form.Control value={nome} type="text" onChange={(e) => setNome(e.target.value)} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Descrição</Form.Label>
                      <Form.Control type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                  </Form.Group>
                  <div style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem' }}>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Preço</Form.Label>
                      <Form.Control type="number" step="0.01" value={preco} onChange={(e) => setPreco(parseFloat(e.target.value))} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Estoque</Form.Label>
                      <Form.Control type="number" step="1" value={estoque} onChange={(e) => setEstoque(parseInt(e.target.value))} />
                  </Form.Group>
                  </div>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Label>User</Form.Label>
                      <Form.Control type="text" value={userInsert} onChange={(e) => setUserInsert(e.target.value)} />
                  </Form.Group>
                  <Button type="submit" style={{ width: '100%' }} variant="success">
                    Editar produto
                  </Button>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Fechar
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
}