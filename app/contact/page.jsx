import Image from 'next/image'
import React from 'react'

const Contact = () => {
    return (
        <div className='content flex justify-center items-center flex-col gap-7'>
            <div>
                <p className='text-3xl mb-4 text-center'>تقدري تبعتيلي علي :</p>
                <div className='flex gap-4'>
                    <a href="https://www.facebook.com/groups/748253372594312" target='blank'><Image src={"/assets/socialIcons/facebook.svg"} width={80} height={80} alt=''/></a>
                    <a href="https://www.instagram.com/asmaaharbii/?hl=ar" target='blank'><Image src={"/assets/socialIcons/instagram.svg"} width={80} height={80} alt=''/></a>
                    <a href="https://wa.me/+201099455472" target='blank'><Image src={"/assets/socialIcons/whatsapp1.svg"} width={80} height={80} alt=''/></a>
                    {/* <a href="https://wa.me/+201099455472"><Image src={"../../public/assets/socialIcons/whatsapp1.svg"} /></a> */}
                </div>
            </div>
            <div>
                <p className='text-3xl mb-4 text-center'>او كلميني علي :</p>
                <a className='flex gap-2 items-center flex-row-reverse' href="tel:+201099455472" target='blank'>
                    <Image src={"/assets/socialIcons/call.png"} width={60} height={60} alt=''/>
                    <span>01099455472</span>
                </a>
            </div>
            <div>
                <p className='text-3xl mb-4 text-center'>زورينى فى :</p>
                <a className='flex gap-2 items-center flex-row-reverse' href="https://www.google.com/maps/place/29%C2%B059'02.5%22N+31%C2%B016'52.2%22E/@29.9840224,31.278603,17z/data=!3m1!4b1!4m4!3m3!8m2!3d29.9840224!4d31.2811779?hl=en&entry=ttu" target='blank'>
                    <span>12 شارع 296 متفرع من شارع العروبه بعد كارفور الجزائر-المعادي</span>
                    <Image src={"/assets/socialIcons/home.svg"} width={60} height={60} alt=''/>
                </a>
            </div>
        </div>
    )
}

export default Contact