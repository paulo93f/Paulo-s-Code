import React from 'react'
import { DiFirebase, DiTerminal, DiReact } from 'react-icons/di'
import {
    Section,
    SectionDivider,
    SectionText,
    SectionTitle,
} from '../../styles/GlobalComponents'
import {
    List,
    ListContainer,
    ListItem,
    ListParagraph,
    ListTitle,
} from './TechnologiesStyles'

const Technologies = () => (
    <Section id="tech">
        <SectionDivider />
        <br />
        <SectionTitle>Technologies</SectionTitle>
        <SectionText>
            I've worked with a range of technologies in the web developmnet
            world. From Back-end to some of Front-end.
        </SectionText>
        <List>
            <ListItem>
                <DiReact size="3rem" />
                <ListContainer>
                    <ListTitle> Front-End</ListTitle>
                    <ListParagraph>
                        Experience with <br />
                        ReactJS
                        <br />
                        Bootstrap
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiTerminal size="3rem" />
                <ListContainer>
                    <ListTitle> Back-End</ListTitle>
                    <ListParagraph>
                        Experience with <br />
                        NextJS
                        <br />
                        Laravel
                        <br />
                        Symfony
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiFirebase size="3rem" />
                <ListContainer>
                    <ListTitle> Databases</ListTitle>
                    <ListParagraph>
                        Experience with <br />
                        Mysql
                        <br />
                        MongoDB
                    </ListParagraph>
                </ListContainer>
            </ListItem>
        </List>
    </Section>
)

export default Technologies
