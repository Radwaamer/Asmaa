import React, { useEffect, useState } from 'react'
import { commerce } from '../lib/commerce';

const useFetch = (item,slug="") => {
    const [data,setData]= useState([]);
    const fetchCat= async ()=>{
        let res=[];
        if(item == 'cat'){
            res=(await commerce.categories.list()).data;
        }else if (item == 'product'){
            res=(await commerce.products.list({category_slug: [slug],})).data;
        }else if(item == 'pagination'){
            res=(await commerce.products.list({category_slug: [slug]})).meta.pagination;
        }
        setData(res);
    };
    useEffect(()=>{fetchCat()},[]);
    return data;
}

export default useFetch;