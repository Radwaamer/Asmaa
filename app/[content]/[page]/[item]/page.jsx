'use client'
import React from 'react'
import Slider from './Slider';
import Description from './Description';
import useGet from '@/app/custom hooks/GetCommerce';
import { useParams } from 'next/navigation';

const Item = () => {
    const params= useParams();
    const item= useGet("product",params.item);
    return (
        <div className="content flex md:grid flex-col-reverse md:grid-cols-2 justify-around gap-5">
            <Description item={item}/>
            <Slider item={item}/>
        </div>
    )
}

export default Item;