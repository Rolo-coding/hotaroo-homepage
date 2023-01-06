import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { BlockTitle } from '../routes/home'

const Container = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, min-content);
  gap: 0.625rem;
  justify-content: center;
`

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, min-content);
  gap: 0.625rem;
`

const Logo = styled(motion.img)`
  width: 3.75rem;
  height: 3.75rem;
  background-color: #fff;
  border: 2px solid #fff;
  border-radius: 10rem;
  cursor: pointer;
`

const firstCol = {
  hidden: { x: -10, opacity: 0 },
  visible: { x: 0, opacity: 1 }
}

const lastCol = {
  hidden: { x: 10, opacity: 0 },
  visible: { x: 0, opacity: 1 }
}

const Langs: React.FC = () => {
  const langs = [...Array(12)].map((_, i) => `lang${i + 1}.png`)
  return (
    <Container>
      <BlockTitle
        style={{ textAlign: 'center', gridColumn: 'span 2' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        Technology
      </BlockTitle>

      <Grid variants={firstCol} transition={{ type: 'tween', duration: 0.4 }}>
        {langs.slice(0, 6).map((lang, i) => (
          <span key={i}>
            <Logo
              src={`./langs/${lang}`}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
            />
          </span>
        ))}
      </Grid>

      <Grid variants={lastCol} transition={{ type: 'tween', duration: 0.4 }}>
        {langs.slice(6, 12).map((lang, i) => (
          <span key={i + 6}>
            <Logo
              src={`./langs/${lang}`}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
            />
          </span>
        ))}
      </Grid>
    </Container>
  )
}

export default Langs
