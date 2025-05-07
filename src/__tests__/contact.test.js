import { render , screen } from "@testing-library/react"
import Contact from '../components/Contact'
import "@testing-library/jest-dom"



test("test my heading in contact component",()=>{
    render(<Contact />)

    const heading = screen.getByRole("heading")

    expect(heading).toBeInTheDocument();
})


test("test my button in contact component",()=>{
    render(<Contact />)

    const button = screen.getByText("Send Message")

    expect(button).toBeInTheDocument();
})


test("test my input boxes in contact component",()=>{  
    render(<Contact />)

    const inputBoxes = screen.getAllByRole("textbox")

    // console.log(inputBoxes.length);
    expect(inputBoxes.length).toBe(4);
})