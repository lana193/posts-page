import React, { useState } from "react";
import { Button, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Col } from "reactstrap";

const AddPostModalContent = ({ toggle, postId, editPost, createPost }) => {
    const [fields, setFields] = useState({
        title: "",
        body: ""
    })
    // Math.max(...arr)

    const handleChange = (event) => {
        event.persist();
        setFields(values => ({ ...values, [event.target.name]: event.target.value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(postId){
            editPost(postId, fields)
        } else{
            createPost(fields)
        }
        toggle()
    }
    return (
        <>
            <Form onSubmit={handleSubmit}>
                <ModalBody>
                    <div className="inforamtion-modal-content">
                        <FormGroup row>
                            <Label for="Title" sm={2}>{!postId ?'11111111':'Post title'}</Label>
                            <Col sm={10}>
                                <Input 
                                    type="text" 
                                    name="title" 
                                    id="title" 
                                    placeholder="Enter post title" 
                                    onChange={handleChange}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="body" sm={2}>Post Text</Label>
                            <Col sm={10}>
                                <Input 
                                    type="textarea" 
                                    name="body" 
                                    id="body" 
                                    placeholder="Enter post text" 
                                    onChange={handleChange}
                                />
                            </Col>
                        </FormGroup>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" type="submit">Submit</Button>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Form>
        </>
    )
}

export default AddPostModalContent;