import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = ({item,params}) => {
    return (
        <Link href={`${params.page}/${item.id}`} className='rounded-lg shadow-xl flex hover:scale-105 transition-all w-fit mx-auto'>
            <Image className='rounded-lg w-48 h-64' src={item.image.url} width={185} height={170} alt='' />
        </Link>
    )
}

export default Card