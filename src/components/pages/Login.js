import React, {useState} from "react";
import {PageLayout, Input, PasswordInput} from "components/common";
import styled from "styled-components";


const Form = styled.form`
    width: 100%;
    max-width: 400px;
    background: #fff;
    border: 1px solid #eee;
    padding: 16px;
    box-sizing: border-box;
    color: #000;
    border-radius: 4px;
    `;

export default function Login(){
    const [formFields, setFormFields] = useState({username: '', password: ''});

    function handleInputChange(e){
        e.persist();
        setFormFields(s => ({
            ...s,
            [e.target.name]: e.target.value
        }))
    }
    return (
        <div>
            <PageLayout>
                <h1>
                    Login
                </h1>
                <Form>
                    <Input 
                        value={formFields.username}
                        onChange={handleInputChange}
                        name="username"
                        type="text" 
                        placeholder="Username" />
                    <PasswordInput 
                        value={formFields.password}
                        onChange={handleInputChange}
                        name="password" />
                </Form>
            </PageLayout>
        </div>
    )
};
