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



