import { render, screen, fireEvent } from "@testing-library/react";
import Login from './Login'

const mockEvent = jest.fn();
jest.mock ("react-router-dom",()=>({
    ...jest.requireActual("react-router-dom"),
    useNavigate: ()=>mockEvent,
}));

//Only email
test("Test if email value matches with input", () => {
    render(<Login />);

    var email = screen.getByPlaceholderText("Enter email");
    fireEvent.change(email,{target: {value: "soumya@gmail.com"}});

    var button = screen.getByRole("button");
    fireEvent.click(button);
    // screen.debug()

    expect(email.value).toBe("soumya@gmail.com");
})

// //Only password
// test("Test if password value matches with input", () => {
//     render(<Login />);

//     var pass = screen.getByPlaceholderText("Password");
//     fireEvent.change(pass,{target: {value: "rkm@123"}});

//     var button = screen.getByRole("button");
//     fireEvent.click(button);
//     //screen.debug()

//     expect(pass.value).toBe("rkm@123");
// })

//Email  error
// test("Test error class", () => {
//     render(<Login />);

//     var email = screen.getByPlaceholderText("Enter email");
//     fireEvent.change(email,{target: {value: "soumya@gmail.com"}});

//     var button = screen.getByRole("button");
//     fireEvent.click(button);
//     // screen.debug()

//     var ee = screen.getAllByText("Invalid User")
//     expect(ee[0]).toHaveClass("emailError");
// })

//Password  error
// test("Test error class", () => {
//     render(<Login />);

//     var password = screen.getByPlaceholderText("Password");
//     fireEvent.change(password, {target: {value:"Ramsan@"}});

//     var button = screen.getByRole("button");
//     fireEvent.click(button);
//     // screen.debug()

//     var pe = screen.getByText("Password must contain Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character")
//     expect(pe).toHaveClass("passwordError");
// })

//Both email and password error
// test("Test number of errors", () => {
//     render(<Login />);

//     var email = screen.getByPlaceholderText("Enter email");
//     fireEvent.change(email,{target: {value: "soumya@gmail.com"}});

//     var password = screen.getByPlaceholderText("Password");
//     fireEvent.change(password, {target: {value:"rkm"}});

//     var button = screen.getByRole("button");
//     fireEvent.click(button);
//     // screen.debug()

//     var ee = screen.getAllByText("Invalid User")
//     expect(ee.length).toBe(1);

//     var pe = screen.getAllByText("Password must contain Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character")
//     expect(pe.length).toBe(1);
// })

//Mocking navigate


// test("mock navigate to next page", ()=>{
//     render(<Login/>);

//     var email = screen.getByPlaceholderText("Enter email");
//     fireEvent.change(email, {target:{ value: 'soumya@gmail.com' }});


//     var password = screen.getByPlaceholderText("Password")
//     fireEvent.change(password,{target:{value: "Rkm@123" }});

//     var button = screen.getByRole('button')
//     fireEvent.click(button)
// })