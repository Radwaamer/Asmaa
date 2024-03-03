import Link from 'next/link';
import React from 'react'

const Logo = () => {
    return (
        <Link href={"/"}><h1 className='pacifico-regular text-6xl text-center'>As<span className='text-gold'>m</span>aa</h1></Link>
    )
}

export default Logo;