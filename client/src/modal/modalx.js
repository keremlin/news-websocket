import React, { useState,useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'

import './modalx.module.css';

const Modalx = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleSave = () => {
    //props.onClickSave();
    setShow(false);
  }
  const handleShow = () => setShow(true);

  //This component created by react-bootstrap 
  //and requier 'npm install react-bootstrap bootstrap'

  return (
    <>
      <Modal show={props.showModalx} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.body}</Modal.Body>
        <Modal.Footer>
          {props.footer}
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Modalx;
