import Logo from '@/app/components/Logo'
import React from 'react'
import Categories from './Categories';

const Side = ({active, setActive}) => {
    return (
        <div onClick={()=>setActive(false)} className={`px-6 pt-9 pb-4 shadow-2xl rounded-lg min-h-screen transition-all
        lg:relative lg:right-0 ${!active?'absolute -right-64':"right-0"}`}>
            <Logo />
            <Categories />
        </div>
    )
}

export default Side;