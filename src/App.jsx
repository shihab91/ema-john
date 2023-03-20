import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import Orders from "./components/Orders/Orders";
import Shop from "./components/Shop/Shop";
import SignUp from "./components/SignUp/SignUp";
import Main from "./layouts/Main";
import { productsAndCartLoader } from "./loaders/productsAndCartLoader";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Shop />,
          loader: productsAndCartLoader,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/orders",
          element: <Orders />,
          loader: productsAndCartLoader,
        },
        {
          path: "/inventory",
          element: <Inventory />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
        {
          path: "*",
          element: (
            <div className="error-page container">
              <h1>
                404 <span style={{ color: "#FF9900" }}>|</span> Nothing here to
                see
              </h1>
            </div>
          ),
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
