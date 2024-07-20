import { fireEvent, render ,screen} from "@testing-library/react"
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should load header component with a login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
            <   Header />
            </Provider>
        </BrowserRouter>
        
    
    );

    const loginButton = screen.getByRole("button",{name:"Login" });
    expect(loginButton).toBeInTheDocument();


})


it("Should load header component with a cart details", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
            <   Header />
            </Provider>
        </BrowserRouter>
    );

    const cart = screen.getByText(/Cart/);
    expect(cart).toBeInTheDocument();
})

// click button using fireEvent.click()
it("Should change login button to logout", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
            <   Header />
            </Provider>
        </BrowserRouter>
    );

    const login = screen.getByRole("button",{name:"Login"});
    fireEvent.click(login);
    const logout =screen.getByRole("button",{name:"Logout"});
    expect(logout).toBeInTheDocument();
})