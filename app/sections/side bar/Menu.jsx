import Logo from '@/app/components/Logo'
import Image from 'next/image'
import React from 'react'

const Menu = ({active, setActive}) => {
    return (
        <div className={`flex px-6 pt-[3.6rem] cursor-pointer w-full lg:hidden transition-all ${active?"absolute left-0":""}`}>
            <Image src={"/assets/sideBarIcons/menu.svg"} width={45} height={45} alt='' onClick={()=>setActive(!active)}/> 
            <div className={`mx-auto ${active?"hidden":""}`}>
                <Logo />
            </div>
        </div>
    )
}

export default Menu