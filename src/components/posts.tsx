import React from 'react'
import { Container, containerVariants } from './home'

const Posts: React.FC = () => {
  return (
    <Container
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ type: 'spring', stiffness: 70, duration: 0.4 }}
    >
      Posts
    </Container>
  )
}

export default Posts
