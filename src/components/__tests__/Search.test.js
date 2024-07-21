import "@testing-library/jest-dom";
import { act, fireEvent, render,screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";

global.fetch= jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("Should search pizza in the body component with search button", async() => {
   await act(async () =>  render(
    < BrowserRouter>
        <Body />
    </BrowserRouter> 
));

   
    const searchButton = screen.getByRole("button", {name:"Search"});
    const searchInput =screen.getByTestId("searchInput");

    fireEvent.change(searchInput,{target:{value : "pizza"} });
    fireEvent.click(searchButton);

    const cards = screen.getAllByTestId("resCard");
    expect(cards.length).toBe(2);
});


