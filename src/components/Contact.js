import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button  } from 'react-bootstrap';

export default class Contact extends Component {
    render() {
        return (
            <div className="container " >
                <div className="row mt-5 pt-5">
                    <div className="col-md-6">
                        <p className="lead">714, Galleria Towers, <br />
                        DLF Phase 4, Gurgaon, <br />
                        Haryana 122009 INDIA <br />
                        Phone +91 124 425 3501</p>
                        <a href="https://goo.gl/maps/NrCZA4wDU6QwWZvD9" className="mb-5" target="_blank">Click here for directions</a>
                        <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.4110254238394!2d77.07921521521939!3d28.467165882483336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18de76f00001%3A0xd17e2d2d440a636c!2sThe%20Idea%20Works!5e0!3m2!1sen!2sin!4v1582638261153!5m2!1sen!2sin" 
                        width="400" height="300" frameborder="0"  allowfullscreen=""></iframe>
                    </div>
                    <div className="col-md-6">
                        <h3>Write to us</h3>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="number" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows="3" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>          
                    </div>
                </div>
            </div>
        )
    }
}
