import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Link as LinkS } from "react-scroll";


export const Nav = styled.div`
   display:flex;
   justify-content:center;
   position:fixed;
   top:0;
   height:80px;
   background: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.1));
   width:100%;
   z-index:100;
   @media screen and (max-width:960px){
    transition:all .8s ease-in-out;
    position:absolute;
   }

   `

export const NavbarContainer = styled.div`
   display:flex;
   justify-content:space-between;
   align-items:center;
   padding:0 24px;
   
   font-size:1rem;
   width:100%;
   height:100%;
   max-width:1200px;
`

export const Navlogo = styled(Link)`
   font-size:1.6rem;
   color:white;
   font-weight:bold;
   text-decoration:none;
   cursor:pointer;
`

export const MobileIcon = styled.div`
   display:none;

   @media screen and (max-width:768px){
    display:flex;
    align-items:center;
    font-size:1.5rem;    
    color:white;
    cursor:pointer;
   }

`


export const NavMenu = styled.ul`
   margin-left:20px;
   display:flex;
   text-align:center;
   gap:10px;
   color:white;
   list-style:none;

   @media screen and (max-width:768px){
    display:none;
   }
`

export const NavItem = styled.li`
   height:80px;

`

export const NavLinks = styled(LinkS)`
   display:flex;
   align-items:center;
   height:100%;
   font-size:1.3rem;
   cursor:pointer;
   letter-spacing: 4px;
   padding:0 1rem;
   
   &.active{
    border-bottom:4px solid #01bf71;
   }

`

export const NavBtn = styled.div`
   display:flex;
   align-items:center;
   cursor:pointer;
   
   @media screen and (max-width:768px){
    display:none;
}
`

export const NavBtnLink = styled(Link)`
    border-radius:50px;
    padding:10px 22px;
    color:#010606;
    background:#01bf71;
    transition:all .4s ease-in-out;
    font-size:1.1rem;
    cursor:pointer;
    text-decoration:none;
    

    &:hover{
        background:white;
    }
    
`