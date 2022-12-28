import React from 'react'
import { Breakline, Container, containerVariants, Title } from './home'

const Posts: React.FC = () => {
  return (
    <Container
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ type: 'tween', duration: 0.4 }}
    >
      <Title>Posts</Title>
      <Breakline />
    </Container>
  )
}

export default Posts
