import React from "react";
import styled from "styled-components";

const StyledUpDownIcons = styled.svg`
    cursor: pointer;
    margin: 1em;
    width: 1em;
    height: 1em;
    stroke: #626262; 
    stroke-width: 2; 
    stroke-linecap: round; 
    stroke-linejoin: round;
`;

export const CommentsIcon = (props) => {
    return (
        <svg {...props} width="1.28em" height="1em" viewBox="0 0 1792 1408">
            <path d="M1408 512q0 139-94 257t-256.5 186.5T704 1024q-86 0-176-16q-124 88-278 128q-36 9-86 16h-3q-11 0-20.5-8t-11.5-21q-1-3-1-6.5t.5-6.5t2-6l2.5-5l3.5-5.5l4-5l4.5-5l4-4.5q5-6 23-25t26-29.5t22.5-29t25-38.5t20.5-44Q142 841 71 736T0 512q0-139 94-257T350.5 68.5T704 0t353.5 68.5T1314 255t94 257zm384 256q0 120-71 224.5T1526 1169q10 24 20.5 44t25 38.5t22.5 29t26 29.5t23 25q1 1 4 4.5t4.5 5t4 5t3.5 5.5l2.5 5l2 6l.5 6.5l-1 6.5q-3 14-13 22t-22 7q-50-7-86-16q-154-40-278-128q-90 16-176 16q-271 0-472-132q58 4 88 4q161 0 309-45t264-129q125-92 192-212t67-254q0-77-23-152q129 71 204 178t75 230z" fill="#626262"/>
        </svg>
    );
}

export const UpIcon = (props) => {
    return (
        <StyledUpDownIcons {...props} viewBox="0 0 24 24">
            <g fill="none">
                <path d="M4 15l8-8l8 8" />
            </g>
        </StyledUpDownIcons>
    );
}

export const DownIcon = (props) => {
    return (
        <StyledUpDownIcons {...props} viewBox="0 0 24 24">
            <g fill="none">
                <path d="M4 9l8 8l8-8" />
            </g>
        </StyledUpDownIcons>
    );
}

const StyledModifyIcons = styled.svg`
    cursor: pointer;
`;

export const EditIcon = (props) => {
    return (
        <StyledModifyIcons {...props} width="1.5em" height="1.5em" viewBox="0 0 36 36">
            <path d="M33 6.4l-3.7-3.7a1.71 1.71 0 0 0-2.36 0L23.65 6H6a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V11.76l3-3a1.67 1.67 0 0 0 0-2.36zM18.83 20.13l-4.19.93l1-4.15l9.55-9.57l3.23 3.23zM29.5 9.43L26.27 6.2l1.85-1.85l3.23 3.23z" fill="#626262"/>
        </StyledModifyIcons>
    );
}

export const DeleteIcon = (props) => {
    return (
        <StyledModifyIcons {...props} width="1.5em" height="1.5em" viewBox="0 0 24 24">
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12l1.41 1.41L13.41 14l2.12 2.12l-1.41 1.41L12 15.41l-2.12 2.12l-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z" fill="#626262"/>
        </StyledModifyIcons>
    );
}



