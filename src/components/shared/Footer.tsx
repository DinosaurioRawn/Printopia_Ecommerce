import React from 'react'
import { BiChevronRight } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { socialLinks } from '../../constants/links';
//import { link } from 'fs';

export const Footer = () => {
    return (
        <footer className="py-16 bg-gray-950 px-12 flex justify-between gap-10 text-salte-200 text-sm flex-wrap mt-10 md:flex-nowrap">
            <Link to='/' className={`text-2x1 font-bold tracking-tighter transition-all text-white flex-1}`}>
            {/* LogoName */}
            PrintopiaMx
            </Link>
            <div className="flex flex-col gap-4 flex-1  text-white">
                <p className="font-semibold uppercase tracking-tighter">
                    Suscribete
                </p>
                <p className="text-xs font-medium text-white">
                    Recibe promociones exclusivas
                </p>

                <div className="border border-gray-800 flex items-center gap-2 px-3 py-2 rounded-full">
                    <input type="email" placeholder='Correo Electronico' className='pl-2 bg-gray-950 text-slate-200 w-full focus:outline-none' />
                    
                    <button className='text-slate-200'>
                        <BiChevronRight size={20} />
                    </button>
                </div>
            </div>

            <div className="flex flex-col gap-4 flex-1 text-slate-200">
                <p className="font-semibold uppercase tracking-tighter text-white">
                    Politicas
                </p>

                <nav className="flex flex-col gap-2 text-xs font-medium text-slate-300 hover:text-white">
                    <Link to='/catalogo'>Productos</Link>
                    <Link to='#' className='text-slate-300 hover:text-white'>Politicas de privacidad</Link>
                    <Link to='#' className='text-slate-300 hover:text-white'>Terminos de uso</Link>
                </nav>
            </div>
            
            <div className="flex flex-col gap-4 flex-1">
                <p className="font-semibold uppercase tracking-tighter text-white">
                    Siguenos
                </p>
                
                <div className="flex">
                    {
                        socialLinks.map((link) => (
                            <a
                                key={link.id}
                                href={link.href}
                                target='_blank'
                                rel='noreferrer'
                                className='text-slate-300 border border-gray-8000 w-full h-full py-3.5 flex items-center justify-center transition-all hover:bg-white hover: hover:text-gray-950'
                            
                            >
                                {link.icon}
                            </a>
                        ))
                    }
                </div>
            </div>
        </footer>
    );
}
