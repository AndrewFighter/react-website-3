import styled from "styled-components";

export const InfoContainer = styled.div`
    color:#fff;
    width:100%;
    background:${({ LightBg }) => (LightBg ? '#010606' : '#e3e1e1')};
`

export const InfoWrapper = styled.div`
    width:100%;
    max-width:1200px;
    margin:0 auto;
    height:660px;
    padding:0 24px;

    @media screen and (max-width:1000px){
        height:1100px;

    }
    

`

export const InfoRow = styled.div`
    height:100%;
    display:grid;
    grid-auto-columns:minmax(auto,1fr);
    justify-items:center;
    align-items:center;
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
    
    @media screen and (max-width:1000px){
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col2' 'col1 col1'` : `'col1 col1' 'col2 col2'`)};
        justify-items:center;
       
       
    
    }

`
export const Column1 = styled.div`
    grid-area:col1;
    text-align:center;
    padding:0 50px;
    margin-bottom:15px;
    @media screen and (max-width:1000px){
        
    }
   
`
export const Column2 = styled.div`
    grid-area:col2;
    padding:0 15px;
    margin-bottom:15px;

    @media screen and (max-width:1000px){
        // width:716px;
        
    }
    `
export const ImgWrap = styled.div`
    margin:0 auto;
    width:455px;
    height:350px;
    
    @media screen and (max-width:768px){
        margin:0 auto;
    }

    `

export const NewImg = styled.img`
    border-radius:${({borderRadius}) => (borderRadius ? '18% 82% 26% 74% / 62% 58% 42% 38%' : '69% 31% 54% 46% / 36% 73% 27% 64%')};
    width:100%;
    height:100%;`
export const TextWrapper = styled.div`
    width:400px;
    text-align:left;
    
    @media screen and (max-width:1000px){
        width:600px;
        display:flex;
        flex-direction:column;
        align-items:center;
        text-align:center;
    }
    
    `
export const Topline = styled.div`
       color:#01BF71;
       font-size:24px;
       line-height:16px;
       letter-spacing:1.4px;
       text-tranform:uppercase;
       font-weight:700;
       margin-bottom:16px;
`
export const Headline = styled.div`
    max-width:365px;
    font-weight:600;
    font-size:48px;
    margin-bottom:24px;
    line-height:1.1;
    color:${({ LightText }) => ( !LightText ? '#f7f8fa' : '#010606')};

    @media screen and (max-width:768px){
        font-size:32px;

    }
    `
export const Subtitle = styled.div`
    margin-bottom:35px;
    max-width:440px;
    font-size:26px;
    line-height:28px;
    color:${({ DarkText }) => (!DarkText ? '#010606' : '#fff')};
   

    @media screen and (max-width:768px){
        font-size:18px;

    }

`
export const BtnWrap = styled.div`
    display:flex;
    justify-content:left;
    @media screen and (max-width:1000px){
        justify-content:center;
    }
    `