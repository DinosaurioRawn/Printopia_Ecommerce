import React from 'react'
import { Link } from 'react-router-dom'

export const Logo = () => {
    return (
        <Link to='/' className={`text-2x1 font-bold tracking-tighter transition-all`}>
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
