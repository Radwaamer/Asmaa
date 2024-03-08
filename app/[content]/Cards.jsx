'use client'
import Card from '@/app/components/Card'
import React from 'react'
import useFetch from '../custom hooks/FetchCommerce'
import { useParams } from 'next/navigation'

const Cards = () => {
    const params=useParams();
    const items= useFetch("product",params.content);
    return (
        <div className='grid gap-9 justify-center sm:justify-between sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 object-cover'>
            {items.map(item=><Card key={item.id} item={item} params={params}/>)}
        </div>
    )
}

export default Cards;