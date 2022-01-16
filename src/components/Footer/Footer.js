import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SubSlogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      {/* <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:111-111-111-111">111-111-111-111</LinkItem>
        </LinkColumn>
      </LinkList> */}
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:paulo93f@gmail.com">paulo93f@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        
        <CompanyContainer>
          <Slogan>Remember, mistakes are like booleans. If you are wrong, you are only off by a bit.</Slogan>
        </CompanyContainer>

        <SocialContainer>
        <SocialIcons href="https://github.com/paulo93f" target="_blank">
            <AiFillGithub size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/paulo93f/" target="_blank">
            <AiFillLinkedin size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://instagram.com/paulo93f" target="_blank">
            <AiFillInstagram size="3rem"/>
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
