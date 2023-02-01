import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import Langs from '../components/langs'
import Cards from '../components/cards'
import {
  Breakline,
  Container,
  Title,
  containerVariants,
  underlineOpacity,
  tween
} from '../style'

const Works: React.FC = () => {
  return (
    <Container variants={{}} initial="hidden" animate="visible" exit="hidden">
      <Helmet>
        <title>Hotaroo - Works</title>
      </Helmet>
      <Langs />
      <Breakline variants={underlineOpacity} />
      <motion.div variants={containerVariants} transition={tween}>
        <Title>Works</Title>
        <Cards />
      </motion.div>
    </Container>
  )
}

export default Works
