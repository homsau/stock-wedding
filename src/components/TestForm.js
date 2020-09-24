import React from "react";
// import React, { Component } from "react";

import { Form, Row, Col, Button } from 'react-bootstrap';

export default class RSVP extends React.Component {
    constructor() {
        super()
        this.state = {
            submitted: false,
            names: "",
            number: "",
            rsvp: "",
            resume: "",
        }
    }

    handleInputChange(event) {
        event.preventDefault();
        const target = event.target;
        const name = target.name;
        const value = target.value;

    this.setState({ [name]: value });
    }

    render() {
        return(
            <div>
                <Form onSubmit={this.handleInputChange} className="d-flex flex-column align-items-left">
                    {/* <Form.Group as={Row} controlId="formHorizontalName"> */}
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                        Names of Attendees
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control type="name" placeholder="Names of all Attendees" />
                        </Col>
                    </Form.Group>

                    {/* <Form.Group as={Row} controlId="formHorizontalName"> */}
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                        Number of Attendees
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control
                            as="select"
                            className="my-1 mr-sm-2"
                            id="inlineFormCustomSelectPref"
                            custom
                        >
                            <option>Choose...</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="No">You're not bringing 8</option>
                        </Form.Control>
                        </Col>
                    </Form.Group>
                    <fieldset>
                        <Form.Group as={Row}>
                        <Form.Label as="legend" column sm={2}>
                            RSVP
                        </Form.Label>
                        <Col style={{textAlign: 'left'}} sm={10}>
                            <Form.Check
                            type="radio"
                            label="Happily Accept"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                            />
                            <Form.Check
                            type="radio"
                            label="Regretfully Decline"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                            />
                            <Form.Check
                            type="radio"
                            label="Regretfully Accept"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios3"
                            />
                            <Form.Check
                            type="radio"
                            label="Happily Decline"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios4"
                            />
                        </Col>
                        </Form.Group>
                    </fieldset>
                    <Form.Group as={Row} controlId="formHorizontalCheck">
                        <Form.Label column sm={2}>
                            Resume (not required, but encouraged)
                        </Form.Label>
                        <Col sm={10}>
                            <Form.File id="exampleFormControlFile1" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col>
                            <Button type="submit">Submit</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}