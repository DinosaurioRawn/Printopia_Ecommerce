import { createBrowserRouter, Navigate } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { AboutPage, HomePage, LoginPage, RegisterPage, StorePage, StoresPage, } from "../pages";
import { ClientLayout } from "../layouts/ClientLayout";
import { OrdersUserPage } from "../pages/OrderUserPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'catalogo',
                element: <StorePage />,
            },
            {
                path: 'product/:slug',
                element: <StoresPage />,
            },
            {
                path: 'nosotros',
                element: <AboutPage />,
            },
            {
                path: 'login',
                element: <LoginPage />,
            },
            {
                path: 'registro',
                element: <RegisterPage />,
            },
            {
                path: 'account',
                element: <ClientLayout />,
                children: [
                    {
                        path: '',
                        element: <Navigate to='/account/pedidos' />,
                    },
                    {
                        path: 'pedidos',
                        element: <OrdersUserPage />,
                    },
                ],
            },
        ]
    },
]);