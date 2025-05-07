import { fireEvent, render ,screen} from "@testing-library/react"
import Header from "../components/Header"
import { Provider } from "react-redux"
import appStore from "../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"



it("Should render header component with login button", () => {
    render(
        <Provider store={appStore} >
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        </Provider>
    )

    const loginBtn= screen.getByRole("button",{name:/Login/})

    expect(loginBtn).toBeInTheDocument();


})

it("Should change login button to logout on click ", () => {
    render(
        <Provider store={appStore} >
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        </Provider>
    )

    const loginBtn= screen.getByRole("button",{name:/Login/});

    fireEvent.click(loginBtn);

    const logoutBtn = screen.getByRole("button",{name:/LogOut/});

    expect(logoutBtn).toBeInTheDocument();


})

it("Should Cart is rendered with component or not ", () => {
    render(
        <Provider store={appStore} >
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        </Provider>
    )

    const cart = screen.getByText(/Cart/)

    expect(cart).toBeInTheDocument();


})

// /Cart/ --> it is known as regex 