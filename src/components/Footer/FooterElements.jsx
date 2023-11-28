import { Link } from "react-router-dom";
import styled from "styled-components";
import {Link as LinkS} from 'react-scroll';


export const FooterContainer = styled.div`
    background:#101522;

`

export const FooterWrap = styled.div`
    padding:48px 24px;
    margin:0 auto;
    width:1200px;
    max-width:100%;

`
export const FooterLinksContainer = styled.div`
    display:flex;
    justify-content:center;
    gap:50px;

`

export const FooterLinksWrapper = styled.div`
    display:flex;
    gap:20px;
    @media screen and (max-width:820px){
        flex-direction:column;
        gap:37px;
}

`

export const FooterLinksItems = styled.div`
    display:flex;
    flex-direction:column;
    width:160px;
    gap:16px;

`

export const FooterLinkTitle = styled.h3`
    font-size:19px;
    // margin-bottom:10px;
    color:#fff;

`

export const FooterLink = styled(Link)`
    font-size:16px;
    color:#fff;
    transition:all 0.3s ease-in-out;
    text-decoration:none;
    &:hover{
        color:#01fb71;
    }

`

export const SocialMedia = styled.div`
    width:100%;
    margin-top:100px;

`

export const SocialMediaWrap = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;

    @media screen and (max-width:768px){
        flex-direction:column;
        gap:30px;
        text-align:center;
    }

`

export const SocialLogo = styled(LinkS)`
    font-size:1.5rem;
    text-decoration:none;
    width:240px;
    color:#fff;
    cursor:pointer;
    font-weight:bold;
    

`
export const WebRights = styled.big`
    flex:1;
    text-align:center;
    color:#fff;

    @media screen and (max-width:768px){
        font-size:21px;
    }

`

export const SocialIcons = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    
    width:240px;

`
export const SocialIconLink = styled.a`
    color:#fff;
    font-size:24px;
    line-height:0;
    cursor:pointer;
    transition:all 0.3s ease-in-out;
    &:hover{
        transform:translateY(-10px);
    }

`