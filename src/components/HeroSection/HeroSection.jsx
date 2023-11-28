import React,{useState} from 'react'
import Video from './../../videos/hero.mp4';
import { HeroContainer, HeroBg, Newvideo, HeroContent, HeroH1, HeroP,BtnWrapper,ArrowForward,ArrowRight } from './HeroSectionElements';
import {Button} from './../Button';


const HeroSection = () => {
    const [hover,setHover] = useState(false);

    const toggle = () => {
        setHover(prev => !prev);
    }
    return (
        <HeroContainer id='home'>
            <HeroBg>
                <Newvideo loop muted autoPlay src={Video}></Newvideo>
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Virtual Banking Made Easy
                </HeroH1>
                <HeroP>Sign up for a new account and receive 250$ in credit towards your next payment</HeroP>
                <BtnWrapper><Button primary='true' big='true' fontBig='true' dark='true' onMouseEnter={toggle} onMouseLeave={toggle} >Sign Up {hover ? <ArrowForward/> : <ArrowRight/> }</Button></BtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection