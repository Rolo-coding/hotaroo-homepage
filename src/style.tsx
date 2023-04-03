import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

const Container = styled(motion.main)`
  width: 100%;
  max-width: 118ch;
  margin-top: 2rem;
  margin-inline: auto;
  padding-inline: 1.5rem;
  padding-bottom: 1.5rem;
`

const underline = css`
  text-decoration-line: underline;
  text-decoration-color: #3f3f46;
  text-decoration-thickness: 0.25rem;
  text-underline-offset: 0.375rem;
`

const Title = styled(motion.h3)`
  font-size: 1.25rem;
  font-weight: 700;
  margin-top: 0.75rem;
  margin-bottom: 1rem;
`

const BlockTitle = styled(Title)`
  ${underline}
`

const Breakline = styled(motion.hr)`
  width: 100%;
  border: 0;
  border-color: ${props => props.theme.breakLine};
  border-style: solid;
  border-bottom-width: 1px;
  margin: 1.5rem 0;
`

const Text = styled(motion.p)`
  font-size: 1rem;
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
`

const tween = {
  type: 'tween',
  duration: 0.4
}

const spring = {
  type: 'spring',
  stiffness: 100,
  damping: 20
}

const delay = {
  staggerChildren: 0.25,
  delayChildren: 0.25
}

const containerVariants = {
  hidden: { y: 30, opacity: 0, transition: tween },
  visible: { y: 0, opacity: 1, transition: spring },
  exit: { y: 30, opacity: 0, transition: tween }
}

const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 1.5,
    filter: 'blur(40px)'
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0)',
    transition: { type: 'tween', duration: 1, delay: 0.4 }
  },
  exit: { opacity: 0, transition: { delay: 0 } }
}

const underlineOpacity = {
  hidden: { opacity: 0 },
  visible: { opacity: 0.5 }
}

const opacity = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0, transition: { ...tween, staggerChildren: 0 } }
}

export {
  Container,
  Title,
  BlockTitle,
  Breakline,
  Text,
  containerVariants,
  imageVariants,
  underlineOpacity,
  underline,
  opacity,
  tween,
  spring,
  delay
}
