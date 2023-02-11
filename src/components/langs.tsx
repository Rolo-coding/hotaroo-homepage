import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import Image, { BlockTitle, opacity, tween, spring } from '../style'

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
              <Image src={`./langs/lang${i + 1}.png`} />
            </Logo>
          ))}
        </Grid>
        <Grid variants={lastCol} transition={spring}>
          {langs.slice(offset, 12).map((_, i) => (
            <Logo key={i + offset} whileHover={{ scale: 1.2 }}>
              <Image src={`./langs/lang${i + 1 + offset}.png`} />
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
