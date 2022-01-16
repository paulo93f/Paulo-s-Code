import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main Center>
        Welcome to <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I'm a full stack web developer, specializing in mostly PHP, but also write JS and some other stuff. Like this site, that's made with React&NextJs
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/paulo93f'}>Check my GitHub</Button>
    </LeftSection>
  </Section>
);

export default Hero;