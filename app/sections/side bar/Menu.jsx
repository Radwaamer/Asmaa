import Image from 'next/image'
import React from 'react'

const Menu = ({active, setActive}) => {
    return (
        <div className={`px-6 pt-[3.6rem] cursor-pointer w-fit lg:hidden transition-all ${active?"absolute left-0":""}`} onClick={()=>setActive(!active)}>
            <Image src={"/assets/sideBarIcons/menu.svg"} width={45} height={45} alt='' /> 
        </div>
    )
}

export default Menu