import "@testing-library/jest-dom";
import Header from "../Header";
import Body from "../Body";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { render,fireEvent,screen } from "@testing-library/react";
import MOCK_DATA_NAME from "../mocks/mockResMenu";
import Cart from "../Cart";
import { act } from "@testing-library/react";
import appStore from "../../utils/appStore";
import RestaurantMenu from "../RestaurantMenu";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA_NAME);
        }
    })
});

it("Should load Restaurant menu and update card item", async() => {
    await act(async() => 
        render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
            <RestaurantMenu/>
            <Cart />
        </Provider>
    </BrowserRouter>
    ));

    const accordioanHeader =screen.getByText("Pot Rice (3)");
    fireEvent.click(accordioanHeader);
    expect(screen.getAllByTestId("foodItem").length).toBe(3);
    expect(screen.getByText("Cart (0 item")).toBeInTheDocument();

    const addButton = screen.getAllByRole("button",{name:"Add+"});
    fireEvent.click(addButton[0]);
    expect(screen.getByText("Cart(1 item")).toBeInTheDocument();

    fireEvent.click(addButton[1]);
    expect(screen.getByText("Cart(2 item")).toBeInTheDocument();


    
});

