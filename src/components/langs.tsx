import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import Image, { BlockTitle, opacity, tween } from '../style'

const Langs: React.FC = () => {
  const langs = [...Array(12)].map((_, i) => `lang${i + 1}.png`)
  return (
    <Container>
      <BlockTitle variants={opacity}>Technology</BlockTitle>
      <Grid variants={firstCol} transition={tween}>
        {langs.slice(0, 6).map((lang, i) => (
          <Logo key={i} whileHover={{ scale: 1.2 }}>
            <Image src={`./langs/${lang}`} />
          </Logo>
        ))}
      </Grid>
      <Grid variants={lastCol} transition={tween}>
        {langs.slice(6, 12).map((lang, i) => (
          <Logo key={i + 6} whileHover={{ scale: 1.2 }}>
            <Image src={`./langs/${lang}`} />
          </Logo>
        ))}
      </Grid>
    </Container>
  )
}

const Container = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, min-content);
  gap: 0.625rem;
  justify-content: center;
  h3 {
    text-align: center;
    grid-column: 2 span;
  }
`

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, min-content);
  gap: 0.625rem;
`

const Logo = styled(motion.span)`
  img {
    width: 3.75rem;
    height: 3.75rem;
    background-color: #fff;
    border: 2px solid #fff;
    border-radius: 10rem;
    cursor: pointer;
  }
`

const firstCol = {
  hidden: { x: -10, opacity: 0 },
  visible: { x: 0, opacity: 1 }
}

const lastCol = {
  hidden: { x: 10, opacity: 0 },
  visible: { x: 0, opacity: 1 }
}

export default Langs
