import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { NavLink } from 'react-router-dom';

function ModalWindow({ addProduct, product }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClick = () => {
        addProduct(product);
        handleShow();
    };

    return (
        <>
            <button className="btn btn-outline-dark" onClick={handleClick}>
                Add to Cart
            </button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add to Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>You have added a product to your cart!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <NavLink to="/cart">
                        <Button variant="primary">Go to Cart</Button>
                    </NavLink>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalWindow;
