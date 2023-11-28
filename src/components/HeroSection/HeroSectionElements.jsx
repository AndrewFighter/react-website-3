import styled from "styled-components";
import {MdArrowForward,MdKeyboardArrowRight} from 'react-icons/md';

export const HeroContainer = styled.div`
    
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    width:100%;
    height:1000px;
    `
export const HeroBg = styled.div`
    position:absolute;
    
    top:0;
    left:0;
    width:100%;
    height:100%;
`

export const Newvideo = styled.video`
   
    height:100%;
    width:100%;
    object-fit:cover;
`
export const HeroContent = styled.div`
    display:flex;
    flex-direction:column;

    margin-top:-100px;
    position:relative;
    padding:10px 0px;
    

`

export const HeroH1 = styled.h1`
    text-align:center;
    font-size:48px;
    color:#fff;
    @media screen and (max-width:768px){
        font-size:40px;
    }

    @media screen and (max-width:480px){
        font-size:32px;
    }

`

export const HeroP = styled.div`
    padding:10px;
    text-align:center;
    margin-top:24px;
    font-size:24px;
    color:#fff;
    max-width:600px;

    @media screen and (max-width:768px){
        font-size:21px;

    }

    @media screen and (max-width:480px){
        font-size:18px;
    }


`

export const BtnWrapper = styled.div`
    margin-top:32px;
    display:flex;
    justify-content:center;


`



export const ArrowForward = styled(MdArrowForward)`
    display:flex;
    align-items:end;
    font-size:20px;
    margin-left:8px;

`
export const ArrowRight = styled(MdKeyboardArrowRight)`
    display:flex;
    align-items:end;
    font-size:20px;
    margin-left:8px;

`

