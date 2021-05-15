import React from 'react';
import { Modal, Button, Col, Row, Container  } from 'react-bootstrap';
// import RSVP from './RSVP.js';
import map from './../images/map.jpg';

function Accomodations(props) {
    return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Hyatt Place
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row className="justify-content-xl-center">
              <Col xs={12} md={12}>
                <img className="map" style={{width: '100%'}} src={map} alt="..." />
              </Col>
              <Col className="modal-reserve-button" xs={12} md={12}>
                <Button variant="primary" target="_blank" href="https://www.hyatt.com/en-US/hotel/georgia/hyatt-place-atlanta-duluth-johns-creek/atlzj?corp_id=G-CUCO" className='main_button align-self-center'>
                  <div>
                    Reserve a room!
                  </div>
                </Button>
              </Col>
              <Col xs={12} md={12}>
                <p style={{paddingTop: '1.5rem'}}><strong><a href="tel:770-622-5858">P: 770 622 5858</a></strong></p>
                <p><strong>Directions from Hartsfield-Jackson Atlanta International Airport:</strong><br />Take I-85 North to Exit 104 (Pleasant Hill Road). Drive West on Pleasant Hill for 4.5 miles to Medlock Bridge Road/Highway 141. Turn Right on Medlock Bridge, and drive three miles. The hotel is on the right.</p>
                <p><strong>Directions from downtown Atlanta:</strong><br />Take I-85 North to Exit 104 (Pleasant Hill Road). Drive West on Pleasant Hill for 4.5 miles to Medlock Bridge Road/Highway 141. Turn right on Medlock Bridge, and drive for three miles. The hotel is on the right.</p>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default Accomodations;