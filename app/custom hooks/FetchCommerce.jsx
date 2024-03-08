import React, { useEffect, useState } from 'react'
import { commerce } from '../lib/commerce';

const useFetch = (item,slug="",page=1) => {
    const [data,setData]= useState([]);
    const fetchCat= async ()=>{
        let res=[];
        if(item == 'cat'){
            res=(await commerce.categories.list()).data;
        }else if (item == 'product'){
            res=(await commerce.products.list({category_slug: [slug],limit: 8,page: page,})).data;
        }else if(item == 'pagination'){
            res=(await commerce.products.list({category_slug: [slug],limit: 8,})).meta.pagination;
        }
        setData(res);
    };
    useEffect(()=>{fetchCat()},[]);
    return data;
}

export default useFetch;