import React from 'react'
import Title from './Title'
import Cards from './Cards'
import Pagination from '../components/Pagination'

const Content = () => {
    return (
        <div className='lg:w-3/4 py-9 px-20 h-screen'>
            <Title />
            <Cards/>
            <Pagination />
        </div>
    )
}

export default Content;