import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { BlockTitle, opacity, tween, spring } from '../style'
import 'react-lazy-load-image-component/src/effects/blur.css'

const offset = 6

const Langs: React.FC = () => {
  const langs = Array(12).fill(0)
  return (
    <>
      <BlockTitle
        style={{ textAlign: 'center' }}
        variants={opacity}
        transition={tween}
      >
        Technology
      </BlockTitle>
      <Container>
        <Grid variants={firstCol} transition={spring}>
          {langs.slice(0, offset).map((_, i) => (
            <Logo key={i} whileHover={{ scale: 1.2 }}>
              <LazyLoadImage src={`./langs/lang${i + 1}.png`} effect="blur" />
            </Logo>
          ))}
        </Grid>
        <Grid variants={lastCol} transition={spring}>
          {langs.slice(offset, 12).map((_, i) => (
            <Logo key={i + offset} whileHover={{ scale: 1.2 }}>
              <LazyLoadImage
                src={`./langs/lang${i + 1 + offset}.png`}
                effect="blur"
              />
            </Logo>
          ))}
        </Grid>
      </Container>
    </>
  )
}

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
  hidden: { x: -10, opacity: 0, transition: tween },
  visible: { x: 0, opacity: 1 }
}

const lastCol = {
  hidden: { x: 10, opacity: 0, transition: tween },
  visible: { x: 0, opacity: 1 }
}

export default Langs
