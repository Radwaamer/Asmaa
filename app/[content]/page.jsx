import { redirect } from 'next/navigation'
import React from 'react'

const Content = ({params}) => {
    if(params.content!="contact"){
        redirect(`${params.content}/1`);
    }
    console.log(params.content)
    return (
        <div></div>
    )
}

export default Content