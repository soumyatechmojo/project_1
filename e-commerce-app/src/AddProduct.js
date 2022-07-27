import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from "./logo.svg";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function AddProducts () {
    var navigate = useNavigate();
    var id = useRef(null);
    var title = useRef("");
    var description = useRef("");
    var price = useRef(null);
    var discount = useRef(null);
    var rating = useRef(null);
    var stock = useRef(null);
    var brand = useRef("");
    var category = useRef("");
    var thumbnail = useRef("");
    var [image, setImage] = useState("");
    var [listOfImages, setListOfImages] = useState([]);

    var [errors, setErrors] = useState({
        id: false,
        title:  false,
        description:  false,
        price:  false,
        discount:  false,
        rating:  false,
        stock:  false,
        brand:  false,
        category:  false,
        thumbnail:  false,
        image: false
    })

    var handleAddProduct = (e) => {
        e.preventDefault();
        var copy = {...errors}

        if (id.current.value.length  < 1) copy.id = true;
        else copy.id = false;

        if (price.current.value.length  < 5) copy.price = true;
        else copy.price = false;

        if (stock.current.value.length  < 5) copy.stock = true;
        else copy.stock = false;

        if (title.current.value.length  < 5) copy.title = true;
        else copy.title = false;

        if (description.current.value.length  < 10) copy.description = true;
        else copy.description = false;

        if (brand.current.value.length  < 5) copy.brand = true;
        else copy.brand = false;

        if (category.current.value.length  < 3) copy.category = true;
        else copy.category = false;

        if (thumbnail.current.value.length  < 8) copy.thumbnail = true;
        else copy.thumbnail = false;

        if (parseInt(discount.current.value) > 100 || parseInt(discount.current.value) < 0) copy.discount = true;
        else copy.discount = false;

        if (parseInt(rating.current.value) > 5 || parseInt(rating.current.value) < 0) copy.rating = true;
        else copy.rating = false;

        if (!copy.title && !copy.description && !copy.brand
            && !copy.category && !copy.thumbnail && !copy.discount
            && !copy.rating && !copy.image) {

                var json = {
                    id: id.current.value,
                    title: title.current.value,
                    description: description.current.value,
                    price: price.current.value,
                    rating: rating.current.value,
                    stock: stock.current.value,
                    brand: brand.current.value,
                    category: category.current.value,
                    thumbnail: thumbnail.current.value,
                    images: listOfImages
                }

                fetch('https://dummyjson.com/products/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(json)
                })
                .then(res => res.json())
                .then(console.log);
            }

        setErrors(copy);

    }

    var handleNav = () => {
        navigate("/Products");
    }

    var addImage = () => {
        if (image.length > 0){
            setErrors({...errors, image: false})
            var copy = [...listOfImages];
            copy.push(image);
            setListOfImages(copy);
            setImage("");
        }
        else{
            setErrors({...errors, image: true})
        }
    }

    var handleImage = (e) => {
        setImage(e.target.value);
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
                <h3>Add a product</h3>
                <Form className='p-4' style={{border:"outset"}} onSubmit={handleAddProduct}>
                    <Form.Group className="mb-3" controlId="formID">
                        <Form.Label>ID</Form.Label>
                        <Form.Control type="number" placeholder="Enter ID" ref={id} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter Title" ref={title} required/>
                        {errors.title && <p className="mt-1">Minimum length of title should be 5</p>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="Enter Description" ref={description} required/>
                        {errors.description && <p className="mt-1">Minimum length of description should be 10</p>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPrice">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number" placeholder="Enter Price" ref={price} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formDiscountPercentage">
                        <Form.Label>Discount Percentage</Form.Label>
                        <Form.Control type="number" placeholder="Enter Discount Percentage" ref={discount} required/>
                        {errors.discount && <p className="mt-1">Discount should be in between 0 and 100</p>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formRating">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control type="number" placeholder="Enter Rating" ref={rating} required/>
                        {errors.rating && <p className="mt-1">Rating should be in between 0 and 5</p>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formStock">
                        <Form.Label>Stock</Form.Label>
                        <Form.Control type="number" placeholder="Enter Stock" ref={stock} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBrand">
                        <Form.Label>Brand</Form.Label>
                        <Form.Control type="text" placeholder="Enter Brand" ref={brand} required/>
                        {errors.brand && <p className="mt-1">Minimum length of brand should be 5</p>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formCategory">
                        <Form.Label>Category</Form.Label>
                        <Form.Control type="text" placeholder="Enter Category" ref={category} required/>
                        {errors.category && <p className="mt-1">Minimum length of category should be 3</p>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formThumbnail">
                        <Form.Label>Thumbnail</Form.Label>
                        <Form.Control type="text" placeholder="Enter Thumbnail" ref={thumbnail} required/>
                        {errors.thumbnail && <p className="mt-1">Minimum length of thumbnail should be 8</p>}
                    </Form.Group>
                    <Row className="mb-3">
                        <Col md="10">
                            <Form.Group className="mb-3" controlId="formImages">
                                <Form.Label>Images</Form.Label>
                                <Form.Control type="text" placeholder="Enter Images" onChange={handleImage} value={image}/>
                                {errors.image && <p className="mt-1">Please add a valid image</p>}
                            </Form.Group>
                        </Col>
                        <Col className="mt-4" md="2">
                            <Button variant="primary" onClick={addImage}>Add image</Button>
                        </Col>
                    </Row>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </Container>
        </>
    )
}