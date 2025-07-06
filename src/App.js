import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Login from "./components/Login";
import { useEffect, useState } from "react";
// import ComponentClass from './components/ComponentClass';
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import CartPage from "./components/CartPage";
import Footer from "./components/Footer";

// import Offline from './components/Offline';

function App() {
  const [userName, setUserName] = useState();

  useEffect(() => {
    // Authentication logic....
    const data = {
      name: "",
    };
    setUserName(data.name);
  }, []);

  return (
    <>
      <Provider store={appStore}>
        <UserContext.Provider value={{ name: userName, setUserName }}>
          <div>
            <Header />
            <Outlet />
            <Footer />
          </div>
        </UserContext.Provider>
      </Provider>
    </>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },

      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default App;
