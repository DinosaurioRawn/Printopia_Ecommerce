//import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
    isDashboard?: boolean;
}

export const Logo = ({ isDashboard }: Props) => {
    return (
        <Link
            to='/'
            className={`text-2xl font-bold tracking-tighter transition-all ${isDashboard && 'hover:scale-105'
                }`}
        >
            {/* LogoName */}
            <p className='hidden lg:block'>
                Printopia
                <span className='text-gray-500'>Mx</span>
            </p>

            {/*CapitalLetter*/}
            <p className='flex text-4xl lg:hidden'>
                <span className='-skew-x-6'>P</span>
                <span className='text-gray-500 skew-x-6'>Mx</span>
            </p>
        </Link>
    )
}
