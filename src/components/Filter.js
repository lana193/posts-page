import React from "react";
import styled from "styled-components";

const FilterContainer = styled.div`
`;

import { Form, FormGroup, Label, Input } from "reactstrap";


const Filter = ({ user, selectedPosts, checkedPosts, setCheckedPosts }) => {
    const handleChange = (e) => {
        if (e.target.checked) {
          const filteredPosts = selectedPosts.filter(item => item.userId === user.id)
          setCheckedPosts([...checkedPosts, ...filteredPosts])
        } else {
          const filteredPosts = checkedPosts.filter(item => item.userId !== user.id)
          setCheckedPosts(filteredPosts)
        }
    }

    return (
    <FilterContainer>
        <FormGroup check inline>
            <Label check for={`option${user.id}`}>
            <Input 
                type="checkbox" 
                id={`option${user.id}`}
                onChange={handleChange}
            /> 
                {user.name}
            </Label>
        </FormGroup>
    </FilterContainer>
    )
} 

export default Filter;
