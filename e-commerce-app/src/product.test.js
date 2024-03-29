import { screen, render as rtlRender, 
  fireEvent, 
  waitForElementToBeRemoved 
} from "@testing-library/react";
import Products from "./Product"
import React from "react";
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit";
import Reducers from "./Reducers";
import axios from 'axios'

const mockEvent = jest.fn();
jest.mock ("react-router-dom",()=>({
    ...jest.requireActual("react-router-dom"),
    useNavigate: ()=>mockEvent,
}));

jest.mock('axios')

const render = (
    ui,
    {
    store = configureStore({
        reducer: Reducers,
    }),
    ...renderOptions
    } = {}
) => {

const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
);
return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

//testing loading cards in DOM
// test("renders page with redux", async () => {
//     const products = [
//       {
//         id: 1,
//         title: "iPhone 9",
//         description: "An apple mobile which is nothing like apple",
//         price: 549,
//         discountPercentage: 12.96,
//         rating: 4.69,
//         stock: 94,
//         brand: "Apple",
//         category: "smartphones",
//         thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
//         images: [
//           "https://dummyjson.com/image/i/products/1/1.jpg",
//           "https://dummyjson.com/image/i/products/1/2.jpg",
//           "https://dummyjson.com/image/i/products/1/3.jpg",
//           "https://dummyjson.com/image/i/products/1/4.jpg",
//           "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
//         ],
//       },
//       {
//         id: 2,
//         title: "iPhone X",
//         description:
//           "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
//         price: 899,
//         discountPercentage: 17.94,
//         rating: 4.44,
//         stock: 34,
//         brand: "Apple",
//         category: "smartphones",
//         thumbnail: "https://dummyjson.com/image/i/products/2/thumbnail.jpg",
//         images: [
//           "https://dummyjson.com/image/i/products/2/1.jpg",
//           "https://dummyjson.com/image/i/products/2/2.jpg",
//           "https://dummyjson.com/image/i/products/2/3.jpg",
//           "https://dummyjson.com/image/i/products/2/thumbnail.jpg",
//         ],
//       },
//     ];
    
//     // Mock axios implementation
//     axios.get.mockImplementationOnce(() =>
//       Promise.resolve({ data: { products } })
//     );
  
//     render(<Products />);
  
//     const makeCustomWait = () => {
//       return waitForElementToBeRemoved(() => screen.queryByAltText("loading"));
//     };
  
//     await makeCustomWait();
  
//     screen.debug();
  
//     const item1 = screen.getByText("iPhone X");
//     expect(item1).toBeInTheDocument();
  
//     const item2 = screen.getByText("iPhone 9");
//     expect(item2).toBeInTheDocument();
  
//     const link = screen.getAllByText("Learn more");
//     expect(link.length).toBe(2);
//   });

//testing navigate to profile focus
// test("Learn more on click", async () => {
//     const products = [
//       {
//         id: 1,
//         title: "iPhone 9",
//         description: "An apple mobile which is nothing like apple",
//         price: 549,
//         discountPercentage: 12.96,
//         rating: 4.69,
//         stock: 94,
//         brand: "Apple",
//         category: "smartphones",
//         thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
//         images: [
//           "https://dummyjson.com/image/i/products/1/1.jpg",
//           "https://dummyjson.com/image/i/products/1/2.jpg",
//           "https://dummyjson.com/image/i/products/1/3.jpg",
//           "https://dummyjson.com/image/i/products/1/4.jpg",
//           "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
//         ],
//       },
//       {
//         id: 2,
//         title: "iPhone X",
//         description:
//           "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
//         price: 899,
//         discountPercentage: 17.94,
//         rating: 4.44,
//         stock: 34,
//         brand: "Apple",
//         category: "smartphones",
//         thumbnail: "https://dummyjson.com/image/i/products/2/thumbnail.jpg",
//         images: [
//           "https://dummyjson.com/image/i/products/2/1.jpg",
//           "https://dummyjson.com/image/i/products/2/2.jpg",
//           "https://dummyjson.com/image/i/products/2/3.jpg",
//           "https://dummyjson.com/image/i/products/2/thumbnail.jpg",
//         ],
//       },
//     ];
    
//     // Mock axios implementation
//     axios.get.mockImplementationOnce(() =>
//       Promise.resolve({ data: { products } })
//     );
  
//     render(<Products />);
  
//     const makeCustomWait = () => {
//       return waitForElementToBeRemoved(() => screen.queryByAltText("loading"));
//     };
  
//     await makeCustomWait();
  
//     screen.debug();
  
//     const card = screen.getAllByText("Learn more");

//     fireEvent.click(card[0]);

//     expect(mockedUsedNavigate).toHaveBeenCalledWith("/Showcase");
//   });


  //testing navigate to add products
// test("Learn more on click", async () => {
//     const products = [
//       {
//         id: 1,
//         title: "iPhone 9",
//         description: "An apple mobile which is nothing like apple",
//         price: 549,
//         discountPercentage: 12.96,
//         rating: 4.69,
//         stock: 94,
//         brand: "Apple",
//         category: "smartphones",
//         thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
//         images: [
//           "https://dummyjson.com/image/i/products/1/1.jpg",
//           "https://dummyjson.com/image/i/products/1/2.jpg",
//           "https://dummyjson.com/image/i/products/1/3.jpg",
//           "https://dummyjson.com/image/i/products/1/4.jpg",
//           "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
//         ],
//       },
//       {
//         id: 2,
//         title: "iPhone X",
//         description:
//           "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
//         price: 899,
//         discountPercentage: 17.94,
//         rating: 4.44,
//         stock: 34,
//         brand: "Apple",
//         category: "smartphones",
//         thumbnail: "https://dummyjson.com/image/i/products/2/thumbnail.jpg",
//         images: [
//           "https://dummyjson.com/image/i/products/2/1.jpg",
//           "https://dummyjson.com/image/i/products/2/2.jpg",
//           "https://dummyjson.com/image/i/products/2/3.jpg",
//           "https://dummyjson.com/image/i/products/2/thumbnail.jpg",
//         ],
//       },
//     ];
    
//     // Mock axios implementation
//     axios.get.mockImplementationOnce(() =>
//       Promise.resolve({ data: { products } })
//     );
  
//     render(<Products />);
  
//     const makeCustomWait = () => {
//       return waitForElementToBeRemoved(() => screen.queryByAltText("loading"));
//     };
  
//     await makeCustomWait();
  
//     screen.debug();
  
//     const button = screen.getAllByText("Add products");

//     fireEvent.click(button[0]);

//     expect(mockedUsedNavigate).toHaveBeenCalledWith("/Add-Product");
//   });

  //testing navigate to cart
//   test("Learn more on click", async () => {
//     const products = [
//       {
//         id: 1,
//         title: "iPhone 9",
//         description: "An apple mobile which is nothing like apple",
//         price: 549,
//         discountPercentage: 12.96,
//         rating: 4.69,
//         stock: 94,
//         brand: "Apple",
//         category: "smartphones",
//         thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
//         images: [
//           "https://dummyjson.com/image/i/products/1/1.jpg",
//           "https://dummyjson.com/image/i/products/1/2.jpg",
//           "https://dummyjson.com/image/i/products/1/3.jpg",
//           "https://dummyjson.com/image/i/products/1/4.jpg",
//           "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
//         ],
//       },
//       {
//         id: 2,
//         title: "iPhone X",
//         description:
//           "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
//         price: 899,
//         discountPercentage: 17.94,
//         rating: 4.44,
//         stock: 34,
//         brand: "Apple",
//         category: "smartphones",
//         thumbnail: "https://dummyjson.com/image/i/products/2/thumbnail.jpg",
//         images: [
//           "https://dummyjson.com/image/i/products/2/1.jpg",
//           "https://dummyjson.com/image/i/products/2/2.jpg",
//           "https://dummyjson.com/image/i/products/2/3.jpg",
//           "https://dummyjson.com/image/i/products/2/thumbnail.jpg",
//         ],
//       },
//     ];
    
//     // Mock axios implementation
//     axios.get.mockImplementationOnce(() =>
//       Promise.resolve({ data: { products } })
//     );
  
//     render(<Products />);
  
//     const makeCustomWait = () => {
//       return waitForElementToBeRemoved(() => screen.queryByAltText("loading"));
//     };
  
//     await makeCustomWait();
  
//     screen.debug();
  
//     const cart = screen.getByAltText("cart");

//     fireEvent.click(cart);

//     expect(mockedUsedNavigate).toHaveBeenCalledWith("/Cart");
//   });

//testing loading cards in DOM with Title filter on P.s also added one more item in products
test("renders page with redux", async () => {
  const products = [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/1/1.jpg",
        "https://dummyjson.com/image/i/products/1/2.jpg",
        "https://dummyjson.com/image/i/products/1/3.jpg",
        "https://dummyjson.com/image/i/products/1/4.jpg",
        "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
      ],
    },
    {
      id: 2,
      title: "iPhone X",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://dummyjson.com/image/i/products/2/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/2/1.jpg",
        "https://dummyjson.com/image/i/products/2/2.jpg",
        "https://dummyjson.com/image/i/products/2/3.jpg",
        "https://dummyjson.com/image/i/products/2/thumbnail.jpg",
      ],
    },
    {
      brand: "Samsung",
      category: "smartphones",
      description: "Samsung's new variant which goes beyond Galaxy to the Universe",
      discountPercentage: 15.46,
      id: 3,
      images: ['https://dummyjson.com/image/i/products/3/1.jpg'],
      price: 1249,
      rating: 4.09,
      stock: 36,
      thumbnail: "https://dummyjson.com/image/i/products/3/thumbnail.jpg",
      title: "Samsung Universe 9"
    }
  ];
    
    // Mock axios implementation
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: { products } })
    );
  
    render(<Products />);
  
    const makeCustomWait = () => {
      return waitForElementToBeRemoved(() => screen.queryByAltText("loading"));
    };
  
    await makeCustomWait();
  
    screen.debug();
  
    const title = screen.getByPlaceholderText("Enter Title");

    fireEvent.change(title,{target:{value:"Samsung"}});

    var cards = screen.getAllByText("Learn more");
    expect(cards.length).toBe(1);
  });