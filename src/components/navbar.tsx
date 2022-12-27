import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import styled from 'styled-components'

const Nav = styled(motion.nav)`
  width: 100%;
  position: sticky;
  top: 0;
  backdrop-filter: blur(10px);
  background-color: #0f0d0c;
`

const Wrapper = styled.div`
  width: 100%;
  max-width: ${props => props.theme.size.medium};
  margin-inline: auto;
  padding: 0.5rem 2rem;
  display: flex;
  align-items: center;
`

const Items = styled.ul`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 1.2rem;
`

const Item = styled.li`
  position: relative;
  &:first-child a {
    font-weight: 600;

    &:hover > svg {
      transform: none;
    }
  }

  a {
    font-weight: 400;
    padding: 0.5rem;
    padding-bottom: 0.25rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    color: inherit;
    transition: color 0.25s ease-in-out;

    &:hover {
      color: ${props => props.theme.dark.accent};
    }
  }
`

const Underline = styled(motion.div)`
  width: 80%;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  height: 2px;
  margin-inline: auto;
  background-color: ${props => props.theme.btn.normal};
`

const Logo = styled.svg`
  width: 2rem;
  height: 2rem;
  transform: rotate(-20deg);
  transition: transform 0.25s ease-in-out;
`

const ButtonWrapper = styled.div<{ isDark: boolean }>`
  display: flex;
  align-items: center;
  padding: 1px;
  background-color: ${props =>
    props.isDark ? 'rgb(82, 82, 91, 1)' : '#805AD5'};
  border-radius: 1.5rem;

  &,
  & > button {
    transition: all 0.1s linear;
  }
`

const Button = styled.button<{ isDark?: boolean }>`
  padding: 0.5rem;
  color: ${props => (props.isDark ? '#000' : '#fff')};
  background-color: ${props => (props.isDark ? '#fff' : 'transparent')};
  border-radius: 1.5rem;
`

const Navbar: React.FC = () => {
  const [isDark, setIsDark] = useState(true)
  const { pathname } = useLocation()
  const bg = isDark ? '0, 0, 0' : '255, 255, 255'
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(
    scrollY,
    [0, 80],
    [`rgba(${bg}, 0)`, `rgba(${bg}, 0.5)`]
  )

  const toggleTheme = () => {
    setIsDark(prev => !prev)
  }

  return (
    <Nav style={{ backgroundColor }}>
      <Wrapper>
        <Items>
          <Item>
            <Link to="/">
              <Logo
                xmlns="http://www.w3.org/2000/svg"
                version="1.0"
                width="360.000000pt"
                height="360.000000pt"
                viewBox="0 0 360.000000 360.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,360.000000) scale(0.100000,-0.100000)"
                  fill="currentColor"
                  stroke="none"
                >
                  <path d="M1365 2920 c-36 -14 -92 -86 -111 -141 -50 -145 -1 -375 104 -491 89 -99 193 -101 265 -6 56 74 76 226 47 350 -48 200 -190 335 -305 288z" />
                  <path d="M2205 2915 c-49 -26 -74 -55 -109 -126 -79 -157 -71 -360 18 -495 130 -195 340 -59 363 236 15 199 -78 384 -199 397 -28 2 -53 -2 -73 -12z" />
                  <path d="M660 2453 c-159 -83 -132 -411 50 -600 112 -117 231 -113 294 10 102 199 -64 571 -269 602 -28 4 -50 1 -75 -12z" />
                  <path d="M2919 2416 c-162 -58 -309 -280 -309 -466 1 -156 112 -230 247 -165 122 60 238 218 269 367 19 91 11 153 -26 212 -40 62 -103 80 -181 52z" />
                  <path d="M1750 1964 c-151 -42 -326 -149 -451 -273 -195 -195 -311 -450 -280 -617 28 -148 106 -257 226 -315 100 -48 158 -40 379 58 174 77 185 77 337 20 53 -20 125 -41 160 -46 199 -32 406 91 478 285 86 227 10 459 -221 680 -152 146 -298 214 -473 220 -69 2 -117 -1 -155 -12z" />
                </g>
              </Logo>
              <span>Hotaroo</span>
            </Link>
          </Item>

          <Item>
            <Link to="/works">
              Works{' '}
              {pathname === '/works' && <Underline layoutId="underline" />}
            </Link>
          </Item>

          <Item>
            <Link to="/posts">
              Posts{' '}
              {pathname === '/posts' && <Underline layoutId="underline" />}
            </Link>
          </Item>

          <Item>
            <a
              href="https://github.com/Rolo-coding/hotaroo-homepage"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"></path>
              </svg>
              <span>Source</span>
            </a>
          </Item>
        </Items>

        <ButtonWrapper onClick={toggleTheme} isDark={isDark}>
          <Button isDark={!isDark}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 118a22 22 0 01-22-22V48a22 22 0 0144 0v48a22 22 0 01-22 22zm0 368a22 22 0 01-22-22v-48a22 22 0 0144 0v48a22 22 0 01-22 22zm113.14-321.14a22 22 0 01-15.56-37.55l33.94-33.94a22 22 0 0131.11 31.11l-33.94 33.94a21.93 21.93 0 01-15.55 6.44zM108.92 425.08a22 22 0 01-15.55-37.56l33.94-33.94a22 22 0 1131.11 31.11l-33.94 33.94a21.94 21.94 0 01-15.56 6.45zM464 278h-48a22 22 0 010-44h48a22 22 0 010 44zm-368 0H48a22 22 0 010-44h48a22 22 0 010 44zm307.08 147.08a21.94 21.94 0 01-15.56-6.45l-33.94-33.94a22 22 0 0131.11-31.11l33.94 33.94a22 22 0 01-15.55 37.56zM142.86 164.86a21.89 21.89 0 01-15.55-6.44l-33.94-33.94a22 22 0 0131.11-31.11l33.94 33.94a22 22 0 01-15.56 37.55zM256 358a102 102 0 11102-102 102.12 102.12 0 01-102 102z"></path>
            </svg>
          </Button>

          <Button isDark={isDark}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M264 480A232 232 0 0132 248c0-94 54-178.28 137.61-214.67a16 16 0 0121.06 21.06C181.07 76.43 176 104.66 176 136c0 110.28 89.72 200 200 200 31.34 0 59.57-5.07 81.61-14.67a16 16 0 0121.06 21.06C442.28 426 358 480 264 480z"></path>
            </svg>
          </Button>
        </ButtonWrapper>
      </Wrapper>
    </Nav>
  )
}

export default Navbar
