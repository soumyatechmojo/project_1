import { useSelector } from "react-redux"
import { useEffect, useState } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import logo from "./logo.svg";
import { useNavigate } from "react-router-dom";

export default function Summary () {
    var [displayItems, setDisplayItems] = useState([]);
    var cart = useSelector((state) => state.cart)
    var address = useSelector((state) => state.address)
    var allProducts = useSelector((state) => state.allProducts);
    var navigate = useNavigate();

    useEffect(()=> {
        var cards = allProducts.filter((item)=>{
            if (item["id"] in cart) {
                return item;
            }
        })
        setDisplayItems(cards);
    },[allProducts, cart]);

    var handleNav = () => {
        navigate("/Products");
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
            <h2>List of ordered items</h2>
            {displayItems.map((item, id)=> {
                return <p key={id}>{item.title}</p>
            })}
            <h3>Will be delivered to..</h3>
            {address}
        </Container>
    </>
    )
}