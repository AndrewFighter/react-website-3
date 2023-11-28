import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterLinkTitle, FooterLink,SocialMedia,SocialMediaWrap,SocialLogo,WebRights,SocialIcons,SocialIconLink } from './FooterElements';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to='signin'>How it works</FooterLink>
                            <FooterLink to='signin'>Testimonials</FooterLink>
                            <FooterLink to='signin'>Careers</FooterLink>
                            <FooterLink to='signin'>Investors</FooterLink>
                            <FooterLink to='signin'>Terms of Service</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>Contact us</FooterLinkTitle>
                            <FooterLink to='signin'>Contact</FooterLink>
                            <FooterLink to='signin'>Support</FooterLink>
                            <FooterLink to='signin'>Destinations</FooterLink>
                            <FooterLink to='signin'>Sponsorships</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                    <FooterLinksItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to='signin'>Submit Video</FooterLink>
                            <FooterLink to='signin'>Ambassadors</FooterLink>
                            <FooterLink to='signin'>Agency</FooterLink>
                            <FooterLink to='signin'>Influencer</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to='signin'>Instagram</FooterLink>
                            <FooterLink to='signin'>Facebook</FooterLink>
                            <FooterLink to='signin'>Toutube</FooterLink>
                            <FooterLink to='signin'>Twitter</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo smooth={true} duration={800} exact='true' spy={true} to='home'>Dolla</SocialLogo>
                        <WebRights>Dolla © {new Date().getFullYear()}.All rights are reserved</WebRights>
                        <SocialIcons>
                            <SocialIconLink target='_blank' aria-label='Instagram' to='https://www.instagram.com/'><FaInstagram/></SocialIconLink>
                            <SocialIconLink target='_blank' aria-label='Facebook' to='https://www.facebook.com/'><FaFacebook/></SocialIconLink>
                            <SocialIconLink target='_blank' aria-label='LinkedIn' to='https://www.linkedin.com/'><FaLinkedin/></SocialIconLink>
                            <SocialIconLink target='_blank' aria-label='Youtube' to='https://www.youtube.com/'><FaYoutube/></SocialIconLink>
                        </SocialIcons>

                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer