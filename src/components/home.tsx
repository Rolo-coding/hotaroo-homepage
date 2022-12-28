import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled(motion.section)`
  width: 100%;
  max-width: ${props => props.theme.size.medium};
  height: 150vh;
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
      transition={{ type: 'spring', stiffness: 70, duration: 0.4 }}
    >
      Home
    </Container>
  )
}

export default Home
