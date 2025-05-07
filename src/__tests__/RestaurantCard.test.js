import { render,screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import RestaurantCard from "../components/RestaurantCard"
import Mock_Data from "../Mocks/ResData.json"


it("should be rendered with props data",()=>{
    render(<RestaurantCard resData={Mock_Data} />)

    const name = screen.getByText("Asha Tiffins")

    expect(name).toBeInTheDocument();
})