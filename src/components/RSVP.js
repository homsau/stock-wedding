import React from 'react';
// import React, { Component } from "react";
import { Form, Row, Col, Button } from 'react-bootstrap';
// import emailjs from 'emailjs-com';
// import env, { config } from "dotenv";
// config(env);


export default class RSVP extends React.Component {
    constructor() {
        super()
        this.state = {
            submitted: false,
            inputNames: '',
            inputNumber: '',
            formHorizontalRadios: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.sendEmail = this.sendEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.name === 'formHorizontalRadios' ? target.id : target.value;
        //const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });

        console.log(this.state);

    }

    handleSubmit(event) {
        event.preventDefault()

        // const {
        //   REACT_APP_EMAILJS_RECEIVER: process.env.REACT_APP_EMAILJS_RECEIVER,
        //   REACT_APP_EMAILJS_TEMPLATEID: template,
        //   REACT_APP_EMAILJS_USERID: user
        // } = this.props.env

        this.sendEmail(
        //   template,
          this.state.inputNames,
          this.state.inputNumber,
          this.state.formHorizontalRadios,
        //   user
        )

        // this.setState({
        //   submitted: true
        // })
    }

    sendEmail(names, number, rsvp) {    
        window.emailjs.send(
            'gmail', 
            'wedding_rsvp', 
            {
                names,
                number,
                rsvp
            }, 
            'user_uTPKoojuppquJYTQ555jb'
        )
          .then(res => {
            this.setState({ submitted: true })
          })
          // Handle errors here however you like, or use a React error boundary
          .catch(err => console.error('Failed to send feedback. Error: ', err))
    }


    render() {

        return(
            this.state.submitted ? 
                <div>
                    <h3>Thank you for submitting your RSVP!</h3>
                </div>
            :
                <div>
                    <Form id="myform" className="d-flex flex-column align-items-left" onSubmit={this.handleSubmit}>
                        <Form.Group as={Row} id="formHorizontalName">
                            <Form.Label column sm={2}>
                            Names of Attendees
                            </Form.Label>
                            <Col sm={10}>
                            <Form.Control 
                                type="name" 
                                name="inputNames" 
                                onChange={this.handleInputChange} 
                                placeholder="Names of all Attendees" 
                            />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} id="formHorizontalPassword">
                            <Form.Label column sm={2}>
                            Number of Attendees
                            </Form.Label>
                            <Col sm={10}>
                            <Form.Control
                                as="select"
                                name="inputNumber"
                                className="my-1 mr-sm-2"
                                id="inlineFormCustomSelectPref"
                                onChange={this.handleInputChange}
                                custom
                            >
                                <option defaultValue>Choose...</option>
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
                            <Col sm={10}>
                                <Form.Check
                                type="radio"
                                label="Happily Accept"
                                name="formHorizontalRadios"
                                id="Happily Accept"
                                onChange={this.handleInputChange}
                                />
                                <Form.Check
                                type="radio"
                                label="Regretfully Decline"
                                name="formHorizontalRadios"
                                id="Regretfully Decline"
                                onChange={this.handleInputChange}
                                />
                                <Form.Check
                                type="radio"
                                label="Regretfully Accept"
                                name="formHorizontalRadios"
                                id="Regretfully Accept"
                                onChange={this.handleInputChange}
                                />
                                <Form.Check
                                type="radio"
                                label="Happily Decline"
                                name="formHorizontalRadios"
                                id="Happily Decline"
                                onChange={this.handleInputChange}
                                />
                            </Col>
                            </Form.Group>
                        </fieldset>
                        {/* <Form.Group as={Row} id="formHorizontalCheck">
                            <Col sm={{ span: 10, offset: 2 }}>
                            <Form.File id="exampleFormControlFile1" label="Resume (not required, but encouraged)" />
                            </Col>
                        </Form.Group> */}

                        <Form.Group as={Row}>
                            <Col sm={{ span: 10, offset: 2 }}>
                            <Button type="submit">Submit</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </div>
        )
    }
}