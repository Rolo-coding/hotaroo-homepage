import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'
import { Github, Instagram, Next } from '../components/svg'
import MacPlus from '../components/macPlus'

export const Container = styled(motion.main)`
  width: 100%;
  max-width: 48rem;
  margin-top: 2.5rem;
  margin-inline: auto;
  padding-inline: 1.5rem;
  padding-bottom: 1.5rem;
`

export const underline = css`
  text-decoration-line: underline;
  text-decoration-color: #3f3f46;
  text-decoration-thickness: 0.25rem;
  text-underline-offset: 0.375rem;
`

export const Title = styled(motion.h3)`
  font-size: 1.25rem;
  font-weight: 700;
  margin-top: 0.75rem;
  margin-bottom: 1rem;
`

export const BlockTitle = styled(Title)`
  ${underline}
`

export const Breakline = styled(motion.hr)`
  width: 100%;
  border: 0;
  border-color: ${props => props.theme.breakLine};
  border-style: solid;
  border-bottom-width: 1px;
  margin: 1.5rem 0;
`

const Wrapper = styled.div`
  margin-bottom: 1.5rem;
`

const Flex = styled.div`
  display: flex;
  justify-content: center;
`

export const Text = styled.p`
  font-size: 1rem;
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
`

const LongText = styled(Text)`
  text-align: center;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  padding: 0.875rem;
  background-color: ${props => props.theme.textBg};
  transition: background-color 0.25s ease-in-out;
`

const Image = styled.img`
  order: 1;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 0.25rem solid #204529;
`

const Info = styled.div`
  flex: 1;
`

const Name = styled.h3`
  font-size: 2.2rem;
  line-height: 1.5;
  font-weight: 700;
`

const Paragraph = styled(Text)`
  text-indent: 1rem;
  text-align: justify;
  hyphens: auto;
`

const Row = styled.div`
  span {
    font-weight: 600;
    margin-right: 1rem;
  }
`

const Anchor = styled.a`
  color: ${props => props.theme.anchor};
  cursor: pointer;
  outline: 2px solid transparent;
  outline-offset: 2px;
  text-decoration: none;
  text-underline-offset: 3px;
  &:hover {
    text-decoration: underline;
  }
`

const AnchorTargetBlank = styled(Anchor).attrs({
  target: '_blank',
  rel: 'noopener noreferrer'
})``

const Button = styled.button`
  height: 2.5rem;
  display: inline-flex;
  gap: 0.5rem;
  align-items: center;
  padding-inline: 1rem;
  border: none;
  border-radius: 5px;
  background-color: ${props => props.theme.button.bg};
  color: ${props => props.theme.button.color};
  box-shadow: 0 0px 1px hsla(0, 0%, 0%, 0.2), 0 1px 2px hsla(0, 0%, 0%, 0.2);
  transition: background-color 0.25s ease-in-out;
  &:hover {
    background-color: ${props => props.theme.button.hover};
  }

  span {
    font-weight: 600;
  }
`

const Item = styled.li`
  a > button {
    box-shadow: none;
    color: ${props => props.theme.button.bg};
    background-color: transparent;
    &:hover {
      background-color: ${props => props.theme.button.link.normal};
    }

    &:active {
      background-color: ${props => props.theme.button.link.active};
    }
  }
`

export const containerVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
}

const Home: React.FC = () => {
  return (
    <Container variants={{}} initial="hidden" animate="visible" exit="hidden">
      <Helmet>
        <title>Hotaroo - Homepage</title>
      </Helmet>
      <>
        <MacPlus />
        <motion.div
          variants={containerVariants}
          transition={{ type: 'tween', duration: 0.4 }}
        >
          <LongText>
            Hello, I'm a student majoring in computer science based in Cambodia!
          </LongText>
          <Flex>
            <Image src="./hotaroo.jpg" />
            <Info>
              <Name>Kay Sothearo</Name>
              <Text>Web Developer ( Frontend / Backend )</Text>
            </Info>
          </Flex>

          <Wrapper>
            <BlockTitle>Work</BlockTitle>
            <Paragraph>
              <Anchor href="mailto:kaysothearo19@gmail.com">Hotaroo</Anchor> is
              a student and full-stack developer based in Phnom Penh. He is not
              the most talkative guy, and prefers his work to do the talk. On
              some of these projects he worked alone, but on some he worked on a
              team and definitely enjoyed teamwork. When not online, he enjoys
              spending time with his family and sometimes staying alone and
              watching movies. Honestly think it is important to balance the
              long hours we spend in front of a computer screen with some
              physical activity, and that’s exactly what he does in his leisure
              time.
            </Paragraph>
          </Wrapper>

          <Flex>
            <Link to="/works">
              <Button>
                <span>My portfolio</span>
                <Next />
              </Button>
            </Link>
          </Flex>

          <Wrapper>
            <BlockTitle>Bio</BlockTitle>
            <Row>
              <Text>
                <span>2001</span>
                Born in Takhmao, Cambodia
              </Text>
              <Text>
                <span>2019</span>
                Passed the National Examinations ( Grade B )
              </Text>
              <Text>
                <span>2023</span>
                Completed Bachelor's in Computer Science
              </Text>
              <Text>
                <span>2023 to present</span>
                Job Hunting
              </Text>
            </Row>
          </Wrapper>

          <Wrapper>
            <BlockTitle>I &#9829;</BlockTitle>
            <Text>
              Art, Music,{' '}
              <AnchorTargetBlank href="https://animedao.to">
                Watching Anime
              </AnchorTargetBlank>
              , Learning from Others
            </Text>
          </Wrapper>

          <div>
            <BlockTitle>On the Web</BlockTitle>
            <ul>
              <Item>
                <AnchorTargetBlank href="https://github.com/hotaroo-dev">
                  <Button>
                    <Github />
                    <span>@hotaroo-dev</span>
                  </Button>
                </AnchorTargetBlank>
              </Item>
              <Item>
                <AnchorTargetBlank href="#">
                  <Button>
                    <Instagram />
                    <span>@hotaroo</span>
                  </Button>
                </AnchorTargetBlank>
              </Item>
            </ul>
          </div>
        </motion.div>
      </>
    </Container>
  )
}

export default Home
