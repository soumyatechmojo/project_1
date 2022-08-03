import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Login () {
var [errors, setErrors] = useState("");
var [emailError, setEmailError] = useState("");
var email = useRef("");
var password = useRef("");
var navigate = useNavigate();


var handleValidation = (e) => {
    var validEmail = false;
    var validPassword = false;

    e.preventDefault();
    var Regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/

    if (/(^$|^.*@.*\..*$)/.test(email.current.value)) {
        validEmail = true;
    } 
    else {
        setEmailError("Invalid Email");
    }

    if (password.current.value.match(Regex)){
        validPassword = true;
    }
    else {
        setErrors("Password must contain eigth to fifteen characters, one upper case, one lower case and one special character.");
    }

    if (validEmail && validPassword) {
        navigate("/Products");
    }
}

    return (
        <Form className='m-4' onSubmit={handleValidation}>
            <Form.Group className="mb-3" controlId="formBasicEmail" >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" ref={email} placeholder="Enter email" />   
            </Form.Group>
            {emailError}  
            <Form.Group className="mb-3 mt-2" controlId="formBasicPassword" >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={password} placeholder="Password" />
            </Form.Group>
            {errors}<br/>
            <Button variant="primary" className='mt-3' type="submit">
                Login
            </Button>
        </Form>
    );
}