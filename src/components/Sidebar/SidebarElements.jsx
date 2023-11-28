import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link } from "react-router-dom";


export const SidebarContainer = styled.div`
   display:grid;
   place-items:center;
   background:#000;
   width:100%;
   height:100%;
   z-index:999;
   position:absolute;
   transition: all .6s ease-in-out; 
   opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
   top:${({isOpen}) => (isOpen ? '0' : '-100%')};
   

`

export const Icon = styled(Link)`
   font-size: 1.5rem;
   position:absolute;
   top:1.8rem;
   right:2rem;
   color:white;
   cursor:pointer;
   text-decoration:none;

`

export const SidebarWrapper = styled.div`

`

export const SidebarMenu = styled.div`
  display:grid;
  grid-template-column:1fr;
  grid-template-rows:repeat(6,70px);
  gap:30px;
  margin-top:40px;
  text-align:center;

  @media screen and (max-width:768px){
    grid-template-rows:repeat(6,50px);


  }
`

export const SidebarLink = styled(LinkS)`
   text-transform:uppercase;
   color:white;
   font-size:1.7rem;
   cursor:pointer;
   
`
export const SidebarBtnWrap = styled.div`
   margin-top:-20px;
   `

export const SidebarBtn = styled(Link)`
  border-radius:50px;
  padding:16px 64px;
  color:#010606;
  background:#01bf71;
  transition:all .4s ease-in-out;
  font-size:1.6rem;
  cursor:pointer;
  text-transform:uppercase;
  text-decoration:none;


  &:hover{
    background:white;
    
}

`

