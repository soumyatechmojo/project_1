import { render, screen, fireEvent } from "@testing-library/react";
import Login from './Login'

const mockEvent = jest.fn();
jest.mock ("react-router-dom",()=>({
    ...jest.requireActual("react-router-dom"),
    useNavigate: ()=>mockEvent,
}));

test("mock navigate to next page", ()=>{
    render(<Login/>);

    var email = screen.getByPlaceholderText("Enter email");
    fireEvent.change(email, {target:{ value: 'soumya@gmail.com' }});


    var password = screen.getByPlaceholderText("Password")
    fireEvent.change(password,{target:{value: "Rkm@123" }});

    var button = screen.getByRole('button')
    fireEvent.click(button)
})