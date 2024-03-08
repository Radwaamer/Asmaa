import React from 'react'
import Options from './Options';

const Description = ({item}) => {
    return (
        <div className='pt-28'>
            <h2 className="text-4xl font-semibold mb-8">{item.name}</h2>
            <p dangerouslySetInnerHTML={{__html: item.description}} className='text-lg'></p>
            <span className="mr-auto block w-fit bg-gold font-bold p-2 rounded-md mt-6">{item.price!=undefined?item.price["formatted_with_code"]:null}</span>
            <Options />
        </div>
    )
}

export default Description;