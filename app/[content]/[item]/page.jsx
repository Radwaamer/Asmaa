'use client'
import React from 'react'
import Slider from './Slider';
import Description from './Description';
import useGet from '@/app/custom hooks/GetCommerce';
import { useParams } from 'next/navigation';

const Item = () => {
    const params= useParams();
    const item= useGet("product",params.item);
    console.log(item);
    return (
        <div className="flex md:grid flex-col-reverse md:grid-cols-2 py-9 w-full justify-around px-20 gap-5">
            <Description item={item}/>
            <Slider item={item}/>
        </div>
    )
}

export default Item;