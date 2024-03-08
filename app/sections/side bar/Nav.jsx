'use client'
import React, { useState } from 'react'
import Side from './Side';
import Menu from './Menu';

const Nav = () => {
    const [active,setActive]=useState(false);
    return (
        <div className={`${active?'w-full fixed bg-white z-10':""} lg:w-1/4 lg:relative`}>
            <Menu active={active} setActive={setActive} />
            <Side active={active} setActive={setActive} />
        </div>
    )
}

export default Nav