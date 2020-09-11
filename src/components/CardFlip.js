import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import { Card, Container, Row, Col } from 'react-bootstrap';
import james_headshot from './../images/james_headshot.jpg';
import becky_headshot from './../images/becky_headshot.jpg';

class CardFlip extends Component {
    constructor() {
        super();
        this.state = {
            isFlipped: false,
            // beckyFlipped: false,
            // jamesFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ 
            isFlipped: !prevState.isFlipped,
            // beckyFlipped: !prevState.beckyFlipped,
            // jamesFlipped: !prevState.jamesFlipped,
            // toggle: !prevState.toggle
        }));
        console.log(this.state);
        console.log(this);
    }
    


    render() {
        // const isFlipped = this.state;

        return (
            <Container>
                <Row className="justify-content-md-center">
                <Col>
                    <h2>About the Bride</h2>
                    <ReactCardFlip beckyFlipped={this.state.beckyFlipped} flipDirection="vertical">
                        
                        <Card onClick={this.handleClick} className="front bio-card">
                            <Card.Img variant="top" src={becky_headshot} />
                            <Card.Title>Rebecca Lynn Cunningham</Card.Title>
                            <button onClick={this.handleClick}>Click to flip</button>
                        </Card>
                
                        <Card onClick={this.handleClick} className="back bio-card">
                            <Card.Body>
                                <Card.Title>Rebecca Lynn Cunningham</Card.Title>
                                <Card.Text>
                                    fiancee: &#123;
                                    occupation: Web Developer;
                                    age: 27;
                                    {/* <p>birthday: June 10;</p>
                                    <p>jokes: puns;</p>
                                    <p>strength: love;</p>
                                    <p>&#125;</p>  */}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </ReactCardFlip>
                </Col>
                
                <Col>
                    <h2>About the Groom</h2>
                    <ReactCardFlip jamesFlipped={this.state.jamesFlipped} flipDirection="vertical">
                        <Card onClick={this.handleClick} className="front bio-card">
                            <Card.Img variant="top" src={james_headshot} />
                            <Card.Title>James Powell Cowart</Card.Title>
                        </Card>
                
                        <Card onClick={this.handleClick} className="back bio-card">
                            <Card.Body>
                                <Card.Title>James Powell Cowart</Card.Title>
                                {/* <Card.Text>
                                    <p>fiance: &#123;</p>
                                    <p>occupation: Web Developer;</p>
                                    <p>age: 30;</p>
                                    <p>birthday: January 21;</p>
                                    <p>jokes: movie references;</p>
                                    <p>strength: honesty;</p>
                                    <p>&#125;</p>
                                </Card.Text> */}
                            </Card.Body>
                        </Card>
                    </ReactCardFlip>
                </Col>
                </Row>
            </Container>
        );
    }
}
export default CardFlip;