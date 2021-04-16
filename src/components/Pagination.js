import React, { useEffect } from "react";
import styled from "styled-components";

const PageNumber = styled.div`
    cursor: pointer;
    
    &.active{
        background-color: #007bff;
        color: #fff;
    }
`;



const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    useEffect(() => {
        const totalPages = Math.ceil(totalPosts / postsPerPage)
        currentPage > totalPages && totalPages > 0 && paginate(totalPages)
    }, [totalPosts, postsPerPage, paginate, currentPage])
    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.length > 0 && pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <PageNumber onClick={() => paginate(number)} className={`page-link ${number === currentPage && "active"}`}>
                            {number}
                        </PageNumber>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Pagination;