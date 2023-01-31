import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { Title } from '../style'
import { Catpaw } from './svg'

const Loading: React.FC = () => {
  return (
    <Wrapper>
      <Title>loading...</Title>
      <Logo variants={logoVariants} initial="normal" animate="active">
        <Catpaw />
      </Logo>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Logo = styled(motion.div)`
  display: inline-block;
  svg {
    width: 2rem;
    height: 2rem;
  }
`

const logoVariants = {
  normal: {
    transform: 'none'
  },
  active: {
    transform: ['rotate(0)', 'rotate(360deg)'],
    transition: {
      type: 'tween',
      duration: 1,
      repeat: Infinity
    }
  }
}

export default Loading
