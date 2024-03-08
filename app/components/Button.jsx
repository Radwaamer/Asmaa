import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Button = ({cat}) => {
    return (
        <Link href={`/${cat.slug}`} className='flex items-center bg-gold text-white p-2 rounded-lg font-bold gap-3 mb-3 w-full'>
            <Image src={cat.assets[0].url} width={45} height={45} alt=''/>
            <p className='text-xl'>{cat.name}</p>
        </Link>
    )
}

export default Button