import Image from 'next/image';
import React from 'react'

const Options = () => {
    return (
        <div className='flex gap-4 pt-32 text-center'>
            <button onClick={()=>history.back()} className='flex items-center justify-center bg-gold text-white p-3 
            rounded-lg font-bold gap-3 mb-5 w-full'>
                <Image src={"/assets/websiteIcons/back.png"} width={30} height={30} alt=''/>
                <p className='text-lg'>للرجوع</p>
            </button>
            <a href={`https://wa.me/+201099455472?text=${window.location.href}`} target='blank' className='flex items-center justify-center bg-gold text-white p-3 
            rounded-lg font-bold gap-3 mb-5 w-full'>
                <Image src={"/assets/socialIcons/whatsapp.svg"} width={30} height={30} alt=''/>
                <p className='text-lg'>اسأليني اكتر</p>
            </a>
        </div>
    )
}

export default Options;