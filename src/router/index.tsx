import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { AboutPage, HomePage, StorePage } from "../pages";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children:[
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'catalogo',
                element: <StorePage />,
            },
            {
                path: 'nosotros',
                element: <AboutPage/>,
            }
        ]
    },
]);