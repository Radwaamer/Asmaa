import Logo from '@/app/components/Logo'
import React from 'react'
import Categories from './Categories';

const Side = ({active, setActive}) => {
    return (
        <div onClick={()=>setActive(false)} className={`px-6 pt-6 pb-2 shadow-2xl rounded-lg min-h-screen transition-all
        lg:relative lg:right-0 ${!active?'absolute -right-96':"right-0"}`}>
            <div className="pt-4 mr-8">
                <Logo />
            </div>
            <Categories />
        </div>
    )
}

export default Side;