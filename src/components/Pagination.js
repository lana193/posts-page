import React, { useEffect } from "react";
import styled from "styled-components";

const PaginationWrapper = styled.nav`
    width: 100%;
    display: flex;
    justify-content: center;

    ul {
        flex-wrap: wrap;
    }

    div {
        cursor: pointer;
    
        &.active{
            background-color: #007bff;
            color: #fff;
        }

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
        <PaginationWrapper>
            <ul className='pagination'>
                {pageNumbers.length > 0 && pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <div onClick={() => paginate(number)} className={`page-link ${number === currentPage && "active"}`}>
                            {number}
                        </div>
                    </li>
                ))}
            </ul>
        </PaginationWrapper>
    );
}

export default Pagination;