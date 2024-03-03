'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const Slider = ({item}) => {
    const [photo,setPhoto]=useState("");
    const [active,setActive]=useState("");
    return (
        <div className="relative w-fit md:mr-auto mx-auto">
            <div className="relative">
                <Image className='rounded-md w-80 h-[27rem] transition-all' src={photo=="" && item.image!=undefined ? item.image.url:photo} 
                width={350} height={450} alt=''/>
                <div className="w-full px-10 flex justify-center items-center gap-4 absolute -bottom-20 left-1/2 -translate-x-1/2">
                    {item.assets!= undefined? item.assets.map((img)=>{
                        return(
                            <div className="cursor-pointer" key={img.id} onClick={()=>{
                                setPhoto(img.url);
                                setActive(img.id)
                            }}>
                                <Image className={`rounded-lg w-20 h-24 ${img.id==active?"border-black border-2":""}`} src={img.url} width={100} height={130} alt=''/>
                            </div>
                        )
                    }):null}
                </div>
            </div>
        </div>
    )
}

export default Slider