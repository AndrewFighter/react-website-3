import React from 'react';
import { Nav, NavbarContainer, Navlogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';
import { FaBars } from 'react-icons/fa';

const Navbar = ({toggle}) => {
    return (
            <Nav>
                <NavbarContainer>
                    <Navlogo to='/' smooth={true} duration={900} exact='true' spy={true}>Dolla</Navlogo>
                    <MobileIcon >
                        <FaBars onClick={toggle}/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about' smooth={true} duration={500} exact='true' offset={-80} spy={true}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='discover'  smooth={true} duration={500} exact='true' offset={-80} spy={true}>Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services' smooth={true} duration={500} exact='true' offset={-80} spy={true}>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                       
                            <NavLinks to='signup' smooth={true} duration={500} exact='true' offset={-80} spy={true}>Sign up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
    )
}

export default Navbar