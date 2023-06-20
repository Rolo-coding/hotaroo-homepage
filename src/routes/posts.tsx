import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Container, Title, containerVariants, spring } from '../style'
import Cards from '../components/cards'
import { posts } from '../data'

const Posts: React.FC = () => {
  return (
    <Container
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={spring}
    >
      <Helmet>
        <title>Hotaroo - Posts</title>
      </Helmet>
      <Title>Posts</Title>
      <Cards name="posts" data={posts} />
    </Container>
  )
}

export default Posts
