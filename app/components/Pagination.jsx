'use client';
import {  useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useEffect } from 'react';
import useFetch from '../custom hooks/FetchCommerce';
const Pagination = () => {
    const count= useFetch("pagination","simple");

    const [windowWidth, setWindowWidth] = useState(count);
    useEffect(()=>{
        const size= ()=>{
            if(window.innerWidth<830){
                setWindowWidth(2)
            }
            else if(window.innerWidth<992){
                setWindowWidth(4)
            }
            else if(window.innerWidth<1200){
                setWindowWidth(6)
            }
            else if(window.innerWidth<1600){
                setWindowWidth(9)
            }
        };
        size();
        window.addEventListener('resize',()=>{
            size();
        });
    },[windowWidth]);


    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            // onPageChange={(e)=>handlePage(e.selected+1)}
            pageRangeDisplayed={windowWidth}
            marginPagesDisplayed={2}
            pageCount={count["total_pages"]}
            previousLabel="<"
            renderOnZeroPageCount={null}
            className={`flex gap-3 justify-center items-center pb-5 mt-8`}
            pageLinkClassName={`py-1 flex justify-center items-center px-3`}
            activeLinkClassName={`bg-[gold] rounded-md text-white scale-110 transition-all`}
            pageClassName={`border rounded-md`}
            previousClassName="border rounded-md"
            previousLinkClassName={`py-1 px-3`}
            nextClassName="border rounded-md"
            nextLinkClassName={`py-1 px-3`}
            disabledLinkClassName={`text-gray-400`}
            // breakClassName={`break`}
            forcePage={0}
        />
    )
}

export default Pagination