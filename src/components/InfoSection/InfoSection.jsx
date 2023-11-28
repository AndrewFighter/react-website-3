import React from 'react'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, Topline, Headline, Subtitle, BtnWrap, ImgWrap, NewImg } from './InfoSectionElements';
import { Button } from './../Button';



const InfoSection = ({ id,
    LightBg,
    LightText,
    topLine,
    headline,
    description,
    buttonLabel,
    imgStart,
    img,
    alt,
    DarkText, primary, big, fontBig, dark,borderRadius }) => {
    return (
        <InfoContainer LightBg={LightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <Topline>{topLine}</Topline>
                            <Headline LightText={LightText} >{headline}</Headline>
                            <Subtitle DarkText={DarkText}>{description}</Subtitle>
                        </TextWrapper>
                        <BtnWrap>
                            <Button primary={primary} big={big} fontBig={fontBig} dark={dark} to='home' smooth={true} exact='true' spy={true} duration={900}>{buttonLabel}</Button>
                        </BtnWrap>
                    </Column1>
                    <Column2>
                        <ImgWrap >
                            <NewImg borderRadius={borderRadius} src={img} alt={alt}></NewImg>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    )
}

export default InfoSection