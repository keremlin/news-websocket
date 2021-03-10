import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'

import './modalx.module.css';

const Modalx = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleSave=()=>{
    props.onClickSave();
  }
  const handleShow = () => setShow(true);

//This component created by react-bootstrap 
//and requier 'npm install react-bootstrap bootstrap'

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {props.button}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.body}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {props.closeButton}
          </Button>
          <Button variant="primary" onClick={handleSave}>
            {props.saveButton}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
);
  }
export default Modalx;
