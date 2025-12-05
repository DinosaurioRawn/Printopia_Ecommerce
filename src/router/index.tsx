import { createBrowserRouter, Navigate } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { AboutPage, CheckoutPage, DashboardOrderPage, DashboardOrdersPage, DashboardProductSlugPage, HomePage, LoginPage, OrderUserPage, RegisterPage, StorePage, StoresPage, } from "../pages";
import { ClientLayout } from "../layouts/ClientLayout";
import { OrdersUserPage } from "../pages/OrdersUserPage";
import { ThankyouPage } from "../pages/ThankyouPage";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { DashboardProductsPage } from "../pages/dashboard/DashboardProductsPage";
import { DashboardNewProductPage } from "../pages/dashboard/DashboardNewProductPage";

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
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <Navigate to='/dashboard/productos' />,
            },
            {
                path: 'productos',
                element: <DashboardProductsPage />,
            },
            {
                path: 'productos/new',
                element: <DashboardNewProductPage />,
            },
            {
                path: 'productos/editar/:slug',
                element: <DashboardProductSlugPage />,
            },
            {
                path: 'ordenes',
                element: <DashboardOrdersPage />,
            },
            {
                path: 'ordenes/:id',
                element: <DashboardOrderPage />,
            },
        ],
    },
]);