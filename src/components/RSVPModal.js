import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import RSVP from './RSVP.js';


function RSVPModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="modal-rsvp" closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            RSVP
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RSVP />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default RSVPModal;