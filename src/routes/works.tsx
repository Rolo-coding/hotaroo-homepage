import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import Langs from '../components/langs'
import Cards from '../components/cards'
import { Breakline, Container, Title, containerVariants } from '../style'

const Works: React.FC = () => {
  return (
    <Container variants={{}} initial="hidden" animate="visible" exit="hidden">
      <Helmet>
        <title>Hotaroo - Works</title>
      </Helmet>
      <>
        <Langs />
        <Breakline
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
        />
        <motion.div
          variants={containerVariants}
          transition={{ type: 'tween', duration: 0.4 }}
        >
          <Title>Works</Title>
          <Cards />
        </motion.div>
      </>
    </Container>
  )
}

export default Works
