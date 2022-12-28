import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled(motion.section)`
  width: 100%;
  max-width: 80ch;
  margin-top: 8rem;
  margin-inline: auto;
  padding-inline: 2rem;
`

export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 1rem;
`

export const Breakline = styled.hr`
  width: 100%;
  opacity: 0.5;
  border: 0;
  border-color: #fff3;
  border-style: solid;
  border-bottom-width: 1px;
  margin: 1.5rem 0;
`

export const containerVariants = {
  hidden: {
    y: 20,
    opacity: 0,
    transition: {
      type: 'tween',
      duration: '0.4'
    }
  },
  visible: {
    y: 0,
    opacity: 1
  }
}

const Home: React.FC = () => {
  return (
    <Container
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ type: 'tween', duration: 0.4 }}
    >
      <Title>Home</Title>
      <Breakline />
    </Container>
  )
}

export default Home
