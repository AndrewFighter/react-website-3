import styled from "styled-components";

export const ServicesContainer = styled.div`
    height:600px;
    background:#010606;
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    @media screen and (max-width:1000px){
        height:900px;
    }
    @media screen and (max-width:768px){
        height:1400px;
        
        align-items:start;
    }
    `

export const ServicesH1 = styled.h1`
    font-size:2.5rem;
    margin-bottom:64px;
    color:#fff;
    @media screen and (max-width:768px){
        width:100%;
        text-align:center;
    }
`

export const ServicesWrapper = styled.div`
    width:100%;
    max-width:1200px;
    margi:0 auto;
    padding:0 50px;
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:16px;
    @media screen and (max-width:1000px){
        grid-template-columns:repeat(2,1fr);
        row-gap:50px;
        padding:0 90px;
    }
    @media screen and (max-width:768px){
        grid-template-columns:1fr;
        justify-items:center;
        padding:0 20px;
        
    }

`

export const ServicesCard = styled.div`
    padding: 30px;
    border-radius:10px;
    background:white;
    max-width:340px;
    display:flex;
    flex-direction:column;
    align-items:center;
    transition:all 0.3s ease-in-out;
    cursor:pointer; 
    &:hover{
        transform:scale(1.03) translateY(-15px);
        
    };
    
    `

export const ServicesIcon = styled.img`
    width:160px;
    height:160px;
    margin-bottom:15px;`

export const ServicesH2 = styled.div`
    font-size:1.3rem;
    font-weight:600;
    margin-bottom:15px;

`

export const ServicesP = styled.div`
    font-size:1.1rem;
    text-align:center;
    `

