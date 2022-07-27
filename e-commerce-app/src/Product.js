import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useEffect, useState } from "react";
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import logo from "./logo.svg";
import { useNavigate } from "react-router-dom";
import { isSelected, loadAllProducts } from "./Reducers";
import { useSelector, useDispatch} from "react-redux";
import axios from 'axios';
//import cartImg from "./cart.jpg";
import Nav from 'react-bootstrap/Nav';
//import loadImg from "./loading.gif";

export default function Products () {
    var brands = ["OPPO","Apple","Samsung","Huawei","Ifei Home","Soft Cotton"];
    var category = ["laptops","smartphones","furniture","groceries","skincare","fragrances"];
    var allProducts = useSelector((state)=> state.allProducts);
    var cartCount = useSelector((state)=> state.cartCount);
    var [displayCards, setDisplayCards] = useState(allProducts);
    var [filter, setFilter] = useState({
        brand: [],
        category: [],
        title: false,
        stock: false,
        brandFlag: false,
        categoryFlag: false,
        titleFlag: false
    })
    var navigate = useNavigate();
    const dispatch = useDispatch();
    var [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadData () {
            await axios.get('https://dummyjson.com/products?limit=1000')
            .then(response => {
                dispatch(loadAllProducts(response.data.products));
                setLoading(false);
            });
        }
        loadData();
    }, [dispatch]);

    useEffect(() => {
         //Filter logic
         var fil = allProducts;

         if (filter.brandFlag){
            fil = allProducts.filter((product) => {
                if (filter.brand.includes(product.brand)) return product;
            })
         }

         if (filter.categoryFlag){
            fil = fil.filter((product) => {
                if (filter.category.includes(product.category)) return product;
            })
        }

         if (filter.titleFlag){
            fil = fil.filter((product) => {
                if (filter.title !== false && filter.title.length > 0){
                    if (product.title.toLowerCase().startsWith(filter.title.toLowerCase())) return product;
                }
            })
         }

         if (filter.stock){
            fil = fil.filter((product) => {
                if (product.stock > 0) return product;
            })
         }
         setDisplayCards(fil);

        //All filters turned off
        if (filter.stock === false && filter.title === false && filter.brand.length === 0 && filter.category.length === 0){
            setDisplayCards(allProducts);
        }
    },[filter,allProducts])

    var handleFilter = (e) => {

        // Stock
        if (e.target.name === "instock"){
            if (e.target.checked){
                setFilter({...filter, stock:true})
            }
            else setFilter({...filter, stock:false});
        }

        //Title
        if (e.target.name === "title"){
            if (e.target.value.length > 0)setFilter({...filter, title: e.target.value, titleFlag: true});
            else setFilter({...filter, title: false, titleFlag: false});
        }

        //Brand
        if (e.target.className === "brand"){
            var brand = filter.brand;
            if (e.target.checked){
                brand.push(e.target.name);
                setFilter({...filter, brand: brand, brandFlag: true});
            }
            else {
                brand = brand.filter((b) => {
                    if (b !== e.target.name)return b;
                });
                if (brand.length === 0){
                    setFilter({...filter, brandFlag: false, brand: []}) 
                } 
                else {
                    setFilter({...filter, brand: brand});
                }
            }
        }

        //Category
        if (e.target.className === "category"){
            var cat = filter.category;
            if (e.target.checked){
                cat.push(e.target.name);
                setFilter({...filter, category: cat, categoryFlag: true});
            }
            else {
                cat = cat.filter((c) => {
                    if (c !== e.target.name)return c;
                });
                if (cat.length === 0) {
                    setFilter({...filter, categoryFlag: false, category: []});
                }
                else {
                    setFilter({...filter, category: cat});
                }
            }
        }
    };

    var selectCard = (e) => {
        dispatch(isSelected(e));
        navigate("/Showcase");
    };

    var handleNav = () => {
        navigate("/Products");
    }

    var handleSort = (e) => {
        var copyDisplay = [...displayCards];

        if (e.target.value !== "Select an option"){
            copyDisplay.sort(function (a,b){
                return a[e.target.value] - b[e.target.value];
            });
    
            setDisplayCards(copyDisplay);
        }
    }

    var goToCart = () => {
        navigate("/Cart");
    }

    if (loading) {
        return (
            <>
            {/* <Container>
                <img src={loadImg} alt='loading' style={{display: "block", marginLeft: "auto", marginRight: "auto", width: "50%"}}></img>
            </Container> */}
            </>
        )
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
                <Nav className="text-start" onClick={()=>navigate("/Add-Product")}>
                    <Nav style={{color:"white"}}>Add products</Nav>
                </Nav>
                {/* <Nav className="text-end">
                    <Nav href="/"><img src={cartImg} style={{width:"40px", height:"40px"}} onClick={goToCart} alt="cart"></img></Nav>
                    <Nav className="fw-bolder" style={{color:"white"}}>{cartCount}</Nav>
                </Nav> */}
                </Container>
            </Navbar>

            <Row>
                <Col md={{span:2, offset:1}}>
                    <h3>Filter</h3>
                    <Accordion defaultActiveKey="0" className="mb-4">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Brands</Accordion.Header>
                            <Accordion.Body>
                                {brands.map(brand => {
                                    return <>
                                        <input type="checkbox" onChange={handleFilter} className="brand" name={brand} aria-label="radio 1" />
                                        <label> &nbsp;{brand}</label><br />
                                    </>
                                    }
                                )}
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Category</Accordion.Header>
                            <Accordion.Body>
                                {category.map((cat) => {
                                    return <>
                                        <input type="checkbox" onChange={handleFilter} className="category" name={cat} aria-label="radio 1" />
                                        <label> &nbsp;{cat}</label><br/>
                                    </>
                                })
                            }
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Title</Accordion.Header>
                            <Accordion.Body>
                            <InputGroup className="mb-3" onChange={handleFilter} >
                                <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
                                <Form.Control
                                name="title"
                                placeholder="Enter Title"
                                aria-label="Title"
                                aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>In stock</Accordion.Header>
                            <Accordion.Body>
                                <Form.Check onChange={handleFilter} aria-label="radio 1" name="instock" label="Show Instock only" />
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <h4>Sort</h4>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Sort</Accordion.Header>
                            <Accordion.Body>
                                <select name="sort" onChange={handleSort}>
                                    <option value="Select an option">Select an option</option>
                                    <option value="price">Price</option>
                                    <option value="rating">Rating</option>
                                    <option value="discountPercentage">Discount Percentage</option>
                                </select>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
                <Col md={{span:9}}>
                    <Row>
                        {displayCards.map((product,id) => {
                            var image = product["images"][0];
                            var title = product["title"];
                            var price = product["price"];
                            var category = product["category"];
                            var rating = product["rating"];
                            var index = id + 100;

                            var card = <Col xs={{offset:1,span:3}} key={index}>
                                <Card 
                                    style={{ width: '18rem', marginBottom: "20px", height:"420px", borderRadius:"1rem"}} 
                                    key={id}>
                                <Card.Img variant="top" src={image} style={{height:"18vh" , objectFit:"contain", borderTopLeftRadius:"1rem", borderTopRightRadius:"1rem"}}/>
                                <Card.Body style={{backgroundColor:"#f3f3f3", borderBottomRightRadius:"1rem", borderBottomLeftRadius:"1rem"}}>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text>Price: ${price}</Card.Text>
                                <Card.Text>Category: {category}</Card.Text>
                                <Card.Text>Rating: {rating}</Card.Text>
                                <Card.Text 
                                    style={{color:"blue", textDecoration:"underline"}}
                                    onClick={()=>selectCard(product["id"])}>
                                    Learn more
                                </Card.Text>
                                </Card.Body>
                                </Card></Col>;
                                return card;
                            })
                        }
                    </Row>
                </Col>
            </Row>
        </>
    );
};