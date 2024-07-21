import { render,screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
import RestaurantCard from "../RestaurantCard";

it("Should render RestaurantCard component with data", () => {
    render(<RestaurantCard resData={MOCK_DATA}/>);

    const name= screen.getByText("Chinese Wok");
    expect(name).toBeInTheDocument();
})