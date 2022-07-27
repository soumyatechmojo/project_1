import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Navbar from 'react-bootstrap/Navbar';
import logo from "./logo.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import { useRef, useState } from 'react';
import { addAddress } from './Reducers';

export default function Checkout () {
    var navigate = useNavigate();
    const dispatch = useDispatch();
    var address = useRef("");
    var [error, setError] = useState("");

    var handleNav = () => {
        navigate("/Products");
    }

    var handleAddress = (e) => {
        e.preventDefault();
        if (address.current.value.length > 10){
            dispatch(addAddress(address.current.value));
            navigate("/Summary");
        }
        else {
            setError("Length of address should be greater than 10");
        }
    }

    return (
        <>
        <Navbar bg="dark" variant="dark" className="mb-4">
            <Container>
            <Navbar.Brand onClick={handleNav}>
                <img
                alt=""
                src={logo}
                width="65"
                height="30"
                className="d-inline-block align-top"
                />
                Home
            </Navbar.Brand>
            </Container>
        </Navbar>

        <Container>
            <h3>Address to be delivered</h3>
            <Form className='p-4' style={{border:"outset"}} onSubmit={handleAddress}>
                <FloatingLabel className="mb-3" controlId="floatingTextarea2" label="Address">
                    <Form.Control
                    as="textarea"
                    placeholder="Enter address"
                    style={{ height: '100px' }}
                    ref={address}
                    />
                </FloatingLabel>
                {error}<br/>
                <Button variant="primary" type="submit" className='mt-2'>Submit</Button>
            </Form>
        </Container>
        </>
    )
}