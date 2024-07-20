import { render ,screen} from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page test cases",() => {
    // use test or it
    test("Should load contact us component", () => {

        render(<Contact/>);
        const heading= screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    
    
    });
    
    test("Should load button inside component", () => {
    
        render(<Contact/>);
        const button= screen.getByText("Submit");
        expect(button).toBeInTheDocument();
    
    
    });
    
    test("Should load input name inside component", () => {
    
        render(<Contact/>);
        const name= screen.getByPlaceholderText("name");
        expect(name).toBeInTheDocument();
    
    
    });
});
