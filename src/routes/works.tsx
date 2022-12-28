import React from 'react'
import { Breakline, Container, containerVariants, Title } from './home'

const Works: React.FC = () => {
  return (
    <Container
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ type: 'tween', duration: 0.4 }}
    >
      <Title>Works</Title>
      <Breakline />
    </Container>
  )
}

export default Works
