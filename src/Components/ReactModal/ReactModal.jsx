import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const ReactModal = ({ info }) => {
  const {image, title, price, ratting, description} = info
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button
        className="btn text-white btn-info ms-2 fw-bold"
        variant="primary"
        onClick={handleShow}
      >
        Details ℹ️
      </Button>

      <Modal show={show} onHide={handleClose}>
              <Modal.Header>
                  <img className="w-50 me-3" src={ image} alt="" />
                  <Modal.Title>{ title}</Modal.Title>
        </Modal.Header>
              <Modal.Body>{description }
                  <div className="d-flex align-items-center justify-content-around">
                  <h4 className="mt-3"><strong>Price:</strong> {price}$</h4>
                  <h4 className="mt-3"><strong>Ratting:</strong> { ratting.rate }</h4>
                  </div>
                  </Modal.Body>
              <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ReactModal;
