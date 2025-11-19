//import { title } from "process";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa6";
//import { href } from "react-router-dom";

export const navbarLinks = [
    {
        id: 1,
        title: 'Inicio',
        href: '/',
    },
    {
        id: 2,
        title: 'Catalogo',
        href: '/catalogo',
    },{
        id: 3,
        title: 'Nosotros',
        href: '/nosotros',
    },
];

export const socialLinks = [
    {
        id: 1,
        title: 'Facebook',
        href: 'https://www.facebook.com',
        icon: <FaFacebookF />,
    },
    {
        id: 2,
        title: 'Instagram',
        href: 'https://www.instagram.com',
        icon: <FaInstagram />,

    },
    {
        id: 3,
        title: 'Tiktok',
        href: 'https://www.tiktok.com',
        icon: <FaTiktok />,

    },
];