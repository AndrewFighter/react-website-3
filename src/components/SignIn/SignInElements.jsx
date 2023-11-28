import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  z-index:999;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #4b79a1, #283e51);
`;

export const FormWrap = styled.div`
  width: 350px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: #fff;
  display:flex;
  flex-direction:column;
  justify-content:center;
`;

export const Icon = styled(Link)`
   position:absolute;
   top:2rem;
   left:1.2rem;
   font-size: 2rem;
   position:absolute;
   top:1.8rem;
   right:2rem;
   color:white;
   cursor:pointer;
   text-decoration:none;

`


export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  width: 100%;
  display:flex;
  flex-direction:column;
  text-align:center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #141414;
`;

export const FormInput = styled.input`
  padding: 12px;
  color:#black;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

export const FormButton = styled.button`
  background: #4b79a1;
  color: #fff;
  padding: 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s ease;

  &:hover {
    background: #283e51;
  }
`;

