import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { SidebarContainer, Icon, SidebarWrapper, SidebarMenu, SidebarLink,SidebarBtnWrap,SidebarBtn } from './SidebarElements';

const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon >
                <FaTimes />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink  to='about' onClick={toggle} smooth={true} duration={500} exact='true' >About</SidebarLink>
                    <SidebarLink  to='discover' onClick={toggle} smooth={true} duration={500} exact='true' >Discover</SidebarLink>
                    <SidebarLink  to='services' onClick={toggle} smooth={true} duration={500} exact='true' >Services</SidebarLink>
                    <SidebarLink  to='signup'  onClick={toggle} smooth={true} duration={500} exact='true' >Sign up</SidebarLink>
                </SidebarMenu>
                <SidebarBtnWrap>
                    <SidebarBtn to='signin' >Sign In</SidebarBtn>
                </SidebarBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar