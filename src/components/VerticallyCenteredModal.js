import React from 'react';
import { Modal, Button, Card, Row, Container, Col } from 'react-bootstrap';
// import amazon from './../images/amazon.png'
import bed_bath_beyond from './../images/bed_bath_beyond.png';
import dillards from './../images/dillards.png';
import amazon from './../images/amazon.png';
import home_depot from './../images/home_depot.png';

function VerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        className="registry-icons"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Registry
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='container-fluid d-flex py-4 justify-content-around align-items-center'>
          <Container>
            <Row className="justify-content-md-center registry-modal">
              {/* <Col xs={6} md={3}>
                <a target='_blank' rel='noopener noreferrer' href='www.jamesandbecks.us/#'>
                  <Card>
                    <Card.Img variant="top" src={amazon} />
                  </Card>
                </a>
              </Col> */}
              <Col xs={12} md={6}>
                <a target='_blank' rel='noopener noreferrer' href='https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/549077696?eventType=Wedding'>
                  <Card>
                    <Card.Img variant="top" src={bed_bath_beyond} />
                  </Card>
                </a>
              </Col>
              <Col xs={12} md={6}>
                <a target='_blank' rel='noopener noreferrer' href='https://www.dillards.com/registry/RebeccaCunningham-JamesCowart/132821638'>
                  <Card>
                    <Card.Img variant="top" src={dillards} />
                  </Card>
                </a>
              </Col>
              <Col className="justify-content-center" xs={12} md={6}>
                <a target='_blank' rel='noopener noreferrer' href='https://www.amazon.com/wedding/share/jamesandbecks'>
                  <Card>
                    <Card.Img variant="top" src={amazon} />
                  </Card>
                </a>
              </Col>
              {/* <Col xs={6} md={3}>
                <a target='_blank' rel='noopener noreferrer' href='www.jamesandbecks.us/#'>
                  <Card>
                    <Card.Img variant="top" src={lowes} />
                  </Card>
                </a>
              </Col> */}
            </Row>
          </Container>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default VerticallyCenteredModal;