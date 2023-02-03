import { createBrowserRouter, Route, BrowserRouter, Rou } from "react-router-dom";
import Home from "../pages/Home";
import Series from "../pages/Series";
import Comics from "../pages/Comics";
import Error404 from "../pages/Error404";
import App from "../App";

export const Routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error404 />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/inicio',
                element: <Home />
            },
            {
                path: '/series',
                element: <Series />
            },
            {
                path: '/comics',
                element: <Comics />
            }
        ]
    }
]);