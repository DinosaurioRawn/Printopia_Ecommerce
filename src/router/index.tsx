import { createBrowserRouter, Navigate } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { AboutPage, CheckoutPage, HomePage, LoginPage, OrderUserPage, RegisterPage, StorePage, StoresPage, } from "../pages";
import { ClientLayout } from "../layouts/ClientLayout";
import { OrdersUserPage } from "../pages/OrdersUserPage";
import { ThankyouPage } from "../pages/ThankyouPage";

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
                    {
                        path: 'pedidos/:id',
                        element: <OrderUserPage />,
                    },
                ],
            },
        ]
    },
    {
        path: '/checkout',
        element: <CheckoutPage />,
    },
    {
        path: '/checkout/:id/thank-you',
        element: <ThankyouPage />,
    },
]);