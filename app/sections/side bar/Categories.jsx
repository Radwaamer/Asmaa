'use client'
import React from 'react'
import Button from './../../components/Button';
import useFetch from '@/app/custom hooks/FetchCommerce';

const Categories = () => {
    const cat= useFetch('cat');
    const list= cat.map(ct=><Button key={ct.id} cat={ct}/>);
    const contact={slug:"contact",assets:[{url:"/assets/sideBarIcons/contact.png"}],name:"تواصلي معايا"};
    return (
        <div className='mt-8'>
            {list}
            <Button cat={contact} />
        </div>
    )
}

export default Categories;