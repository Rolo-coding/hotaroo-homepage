import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Container, Title, containerVariants, Breakline } from './home'
import Cards from '../components/cards'

const Posts: React.FC = () => {
  return (
    <Container
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ type: 'tween', duration: 0.4 }}
    >
      <Helmet>
        <title>Hotaroo - Posts</title>
      </Helmet>
      <>
        <div>
          <Title>Posts</Title>
        </div>
        <Cards />
      </>
    </Container>
  )
}

export default Posts
