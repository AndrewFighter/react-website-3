import styled from "styled-components";
import { Link as LinkS } from "react-scroll";


export const Button = styled(LinkS)`
    display:flex;
    align-items:end;
    justify-content:center;
    width:50%;
    cursor:pointer;
    border-radius:50px;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    background:${({primary}) => (primary ? '#01BF71' : '#010606')};
    color: ${({dark}) => (dark ? '#010606' : '#fff' )};
    font-size:${({fontBig}) => (fontBig ? '18px' : '20px')};
    border:none;
    border:2px solid transparent;
    outline:none;
    line-height:25px;
    transition:all .5s ease-in-out;

    &:hover{
        padding: ${({big}) => (!big ? '14px 48px' : '12px 30px')};
        background:${({primary}) => (!primary ? '#01BF71' : '#010606')};
        color: ${({dark}) => (!dark ? '#010606' : '#fff' )};
        font-size:${({fontBig}) => (!fontBig ? '16px' : '23px')};
        border-color: #eee;
        
    }

`