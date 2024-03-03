import React, { useEffect, useState } from 'react'
import { commerce } from '../lib/commerce';

const useGet = (item,content) => {
    const [data,setData]= useState([]);
    const fetchCat= async ()=>{
        let res=[];
        if(item =='cat'){
            res=await commerce.categories.retrieve(content, { type: 'slug' });
        }
        else if(item =='product'){
            res=await commerce.products.retrieve(content);
        }
        setData(res);
    };
    useEffect(()=>{fetchCat()},[]);
    return data;
}

export default useGet;