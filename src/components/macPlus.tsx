import React from 'react'
import { motion } from 'framer-motion'
import styled, { keyframes } from 'styled-components'
import { opacity } from '../style'

const MacPlus: React.FC = () => {
  return (
    <Stage variants={opacity}>
      <Position variants={macVariants} initial="normal" animate="active">
        <Mac>
          <Top />
          <Front>
            <BezelTop />
            <BezelBottom />
            <BezelLeft />
            <BezelRight />
            <ScreenContainer>
              <Screen>
                <Text>hello, Hotaroo</Text>
                <Sheen />
              </Screen>
            </ScreenContainer>
            <Logo>
              <Image />
              <span>Macintosh Plus</span>
            </Logo>
            <Floppy />
          </Front>
          <Back />
          <Left />
          <Right />
          <BaseFront />
          <BaseBack />
          <BaseLeft />
          <BaseRight />
          <Shadow />
        </Mac>
      </Position>
    </Stage>
  )
}

const Stage = styled(motion.div)`
  width: 100%;
  perspective: 1600px;
  perspective-origin: 50% 100px;
  font-size: 18px;
`

const Position = styled(motion.div)`
  width: 9em;
  margin-inline: auto;
  margin-bottom: 5.5em;
  transform-style: preserve-3d;
`

const Mac = styled.div`
  width: 12em;
  height: 10em;
  margin-inline: auto;
  transform-style: preserve-3d;
  transform: rotateY(-20deg);

  & figure,
  & span {
    display: block;
    position: absolute;
    backface-visibility: hidden;
    opacity: 1;
  }
`

const Top = styled.figure`
  height: 10.95em;
  width: 9.6em;
  background: linear-gradient(
    to left,
    #fafafa,
    #d9d9d9 0.25em,
    #d9d9d9 9.35em,
    #fafafa
  );
  transform: rotateX(5deg) rotateX(90deg) translateZ(5.45em);
`

const Size = styled.figure`
  height: 11.5em;
  width: 9.6em;
`

const Front = styled(Size)`
  background-color: #e0e0e0;
  transform: rotateX(5deg) translateZ(5.43em);
`

const Bezel = styled.span`
  width: 100%;
  border-left: 0.5em solid transparent;
  border-right: 0.5em solid transparent;
`

const BezelTop = styled(Bezel)`
  border-top: 0.75em solid #f2f2f2;
`

const BezelBottom = styled(Bezel)`
  border-top: 0.75em solid #ccc;
  transform: rotateZ(180deg) translateY(-10.76em);
`

const BezelSide = styled.span`
  width: 11.5em;
  border-left: 0.75em solid transparent;
  border-right: 0.75em solid transparent;
`

const BezelLeft = styled(BezelSide)`
  border-top: 0.5em solid #d9d9d9;
  transform: rotateZ(-90deg) translateX(-5.5em) translateY(-5.5em);
`

const BezelRight = styled(BezelSide)`
  border-top: 0.5em solid #d4d4d4;
  transform: rotateZ(90deg) translateX(5.5em) translateY(-3.6em);
`

const Back = styled(Size)`
  background: linear-gradient(to top, #f2f2f2, #e6e6e6 0.25em, #c2c2c2);
  transform: rotateX(5deg) translateZ(-5.45em) rotateY(180deg);
`

const Side = styled.figure`
  height: 11.5em;
  width: 10.9em;
  background: linear-gradient(to top, #fffa, #e0e0e0 0.25em, #b3b3b3);
`

const Left = styled(Side)`
  transform: rotateX(5deg) rotateY(-90deg) translateZ(5.45em);
`

const Right = styled(Side)`
  transform: rotateX(5deg) rotateY(90deg) translateZ(4.14em);
`

const Base = styled.figure`
  height: 2.1em;
  width: 9.6em;
  background: #c2c2c2;
`

const BaseSide = styled.figure`
  height: 2.1em;
  width: 10em;
  background: #b3b3b3;
`

const BaseFront = styled(Base)`
  transform: translateY(10.7em) translateZ(5em);
`

const BaseBack = styled(Base)`
  background-color: #b3b3b3;
  transform: translateY(10.7em) translateZ(-5em) rotateY(180deg);
`

const BaseLeft = styled(BaseSide)`
  transform: translateY(10.7em) rotateY(-90deg) translateZ(4.99em);
`

const BaseRight = styled(BaseSide)`
  transform: translateY(10.7em) rotateY(90deg) translateZ(4.58em);
`

const Shadow = styled.figure`
  width: 10em;
  height: 11em;
  background: transparent;
  transform: rotateX(90deg) translateZ(-7.4em) translateX(12em);
  box-shadow: -12.2em 0 1.8em rgba(100, 90, 100, 0.4);

  @media screen and (max-width: 33.75rem) {
    display: none !important;
  }
`

const ScreenContainer = styled.figure`
  width: 7.25em;
  height: 5.25em;
  background: linear-gradient(
    to top,
    #b3b3b3,
    #cccccc 4%,
    #cccccc 96%,
    #a6a6a6
  );
  border-radius: 0.1em;
  padding: 0.5em;
  transform: translate3d(1.15em, 1.5em, 0);
`

const Screen = styled.span`
  width: 6.75em;
  height: 4.8em;
  top: 0.25em;
  left: 0.25em;
  background: #657374;
  border: 0.25em solid #657374;
  border-radius: 0.25em;
  overflow: hidden;
`

const flash = keyframes`
  0% { opacity: 0},
  49.9% { opacity: 0},
  50%, 100% {opacity: 1}
`

const Text = styled.p`
  color: #00c317;
  font-family: monospace, prestige;
  font-size: 0.4em;
  &:before {
    content: '> ';
  }
  &:after {
    content: ' |';
    animation: ${flash} 1.5s infinite linear;
  }
`

const Sheen = styled.span`
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 0.25em;
  background: linear-gradient(
    to bottom left,
    rgba(255, 255, 255, 0.03),
    rgba(255, 255, 255, 0.06) 50%,
    transparent 50%,
    transparent
  );
`

const Logo = styled.figure`
  transform: translateY(8.25em) translateX(1.25em);
  & > span:last-child {
    top: 0.6em;
    left: 2.5em;
    width: 10em;
    font-family: apple_garamondregular, 'Garamond', 'Times New Roman', Times,
      serif;
    font-size: 0.333em;
    color: #555555;
    line-height: 0.8em;
  }
`

const Image = styled.span`
  width: 10px;
  height: 16px;
  top: -0.25em;
  left: 0;
  background: url(./apple.png) no-repeat bottom;
  background-size: 100%;
`

const Floppy = styled.figure`
  width: 3.2em;
  height: 0.2em;
  background-color: #555;
  transform: translate3d(5em, 8.52em, 0);
  border-top: 0.1em solid #ccc;
  border-bottom: 0.1em solid #f2f2f2;
  border-left: 0.3em solid #e6e6e6;
  border-right: 0.3em solid #e6e6e6;
  border-radius: 0.25em;
`

const macVariants = {
  normal: {
    transform: 'none'
  },
  active: {
    transform: ['rotateY(40deg)', 'rotateY(-40deg)', 'rotateY(40deg)'],
    transition: {
      type: 'tween',
      duration: 10,
      repeat: Infinity
    }
  }
}

export default MacPlus
