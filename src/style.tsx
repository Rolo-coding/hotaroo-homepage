import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

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

export const Text = styled.p`
  font-size: 1rem;
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
`

export const containerVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
}
