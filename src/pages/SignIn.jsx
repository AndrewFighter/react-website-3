import React from 'react'

import {Container,FormWrap,FormContent,Form,FormLabel,FormInput,FormButton,Icon} from './../components/SignIn/SignInElements';


const SignIn = () => {
    return (
        <Container>
            <FormWrap>
                <Icon to='/'>Dolla</Icon>
                <FormContent>
                    <Form action='#'>
                        <FormLabel htmlFor='emeil'>Email</FormLabel>
                        <FormInput placeholder='Write your Email' type='emeil' id='emeil' required/>
                        <FormLabel htmlFor='password'>Password</FormLabel>
                        <FormInput  placeholder='Write your password' type='password' id='password' required/>
                        <FormButton type='submit'>Continue</FormButton>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    )
}

export default SignIn