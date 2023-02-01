import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Container, Title, containerVariants, tween } from '../style'
import Cards from '../components/cards'

const Posts: React.FC = () => {
  return (
    <Container
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={tween}
    >
      <Helmet>
        <title>Hotaroo - Posts</title>
      </Helmet>
      <Title>Posts</Title>
      <Cards />
    </Container>
  )
}

export default Posts
