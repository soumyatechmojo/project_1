import { useSelector } from "react-redux";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import logo from "./logo.svg";
import { useNavigate } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import cartImg from "./cart.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';

export default function Cart () {
    var cart = useSelector((state) => state.cart)
    var navigate = useNavigate();
    var cartCount = useSelector((state)=> state.cartCount);
    var allProducts = useSelector((state) => state.allProducts);
    var [displayItems, setDisplayItems] = useState([]);
    var [totalPrice, setTotalPrice] = useState(0);

    useEffect(()=> {
        var total = 0;
        var cards = allProducts.filter((item)=>{
            if (item["id"] in cart) {
                total += item.price*cart[item["id"]];
                return item;
            }
        })
        setTotalPrice(total);
        setDisplayItems(cards);
    },[allProducts, cart]);

    var handleNav = () => {
        navigate("/Products");
    }

    var goToCart = () => {
        navigate("/Cart");
    }

    var handleProceed = () => {
        navigate("/Checkout");
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
                <Nav className="text-end">
                    <Nav href="/"><img src={cartImg} style={{width:"40px", height:"40px"}} onClick={goToCart} alt="cart"></img></Nav>
                    <Nav className="fw-bolder" style={{color:"white"}}>{cartCount}</Nav>
                </Nav>
                </Container>
            </Navbar>
            <Container>
                <h3>Shopping Cart</h3>
                <Row>
                    <Col md={{span:9}}>
                        {displayItems.map((item)=>{
                            var card = <Row className="p-4 mb-2" style={{border: "outset"}}>
                            <Col>
                                <img src={item.thumbnail} style={{width:"230px", height:"200px", objectFit:"contain"}} alt="thumnail"></img>
                            </Col>
                            <Col>
                                <h4>{item.title}</h4>
                                <p>Stock: {item.stock}</p>
                                <p>Quantity: {cart[item.id]}</p> 
                            </Col>
                            <Col>
                                <h4>Price</h4>
                                <p>${item.price}</p>
                            </Col>
                        </Row>;
                        return card;
                        })}
                    </Col>
                    <Col md={{span:3}} className="p-3">
                        <h3>SubTotal: ${totalPrice}</h3>  
                        <Button variant="success" className="m-2" onClick={handleProceed}>Place Order</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}