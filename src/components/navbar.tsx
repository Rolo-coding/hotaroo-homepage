import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import styled from 'styled-components'
import { Catpaw, Github, Sun, Moon, Hamburger } from './svg'

const Nav = styled(motion.nav)`
  z-index: 2;
  width: 100%;
  position: sticky;
  top: 0;
  backdrop-filter: blur(10px);
  background-color: #0f0d0c;
`

const Flex = styled.div`
  display: flex;
  align-items: center;
`

const Wrapper = styled(Flex)`
  width: 100%;
  max-width: ${props => props.theme.size.large};
  margin-inline: auto;
  padding: 0.5rem 0.625rem;
  gap: 0.75rem;
`

const Logo = styled.div`
  svg {
    width: 2rem;
    height: 2rem;
    transform: rotate(-20deg);
    transition: transform 0.25s ease-in-out;
  }
  &:hover svg {
    transform: none;
  }

  a {
    padding: 0.5rem;
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 1.75;
    letter-spacing: -0.025em;
    display: flex;
    align-items: center;
  }
`

const Tabs = styled.ul`
  flex: 1;
  gap: 1.5rem;
  &,
  a {
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: ${props => props.theme.size.medium}) {
    display: none;
  }
`

const Tab = styled.li`
  position: relative;
  a {
    gap: 0.25rem;
    font-weight: 400;
    padding: 0.5rem;
    padding-bottom: 0.25rem;
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

const ButtonWrapper = styled(Flex)<{ isDark: boolean }>`
  display: flex;
  align-items: center;
  padding: 1px;
  background-color: ${props => (props.isDark ? 'rgb(82 82 91)' : '#805AD5')};
  border-radius: 1.5rem;
  cursor: pointer;
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

const Dropdown = styled(motion.div)`
  position: relative;
  button {
    display: none;
    padding: 0.5rem;
    background-color: transparent;
    border-radius: 0.25rem;
    border: 1px solid #fff2;
    transition: background-color 0.25s ease-in-out;
    &:hover {
      background-color: rgb(82 82 91 / 0.5);
    }

    svg {
      width: 1.25rem;
      height: 1.25rem;
    }

    @media screen and (max-width: ${props => props.theme.size.medium}) {
      display: block;
    }
  }
`

const Menu = styled(motion.div)`
  width: 14rem;
  position: absolute;
  right: 0;
  margin-top: 0.5rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  background-color: rgb(39 39 42 / 1);
  border-radius: 0.25rem;
  border: 1px solid rgb(63 63 70 / 0.5);
  transform-origin: right top;
`

const Item = styled(motion.div)`
  font-size: 1rem;
  line-height: 1.25;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.25s ease-in-out;

  &:hover {
    background-color: rgb(82 82 91 / 0.5);
  }
`

const menuVaraints = {
  expanded: {
    opacity: 1,
    scale: 1,
    display: 'block'
  },
  collapsed: {
    opacity: 0,
    scale: 0.9,
    transitionEnd: {
      display: 'none'
    }
  }
}

interface Props {
  isDark: boolean
  toggleTheme: () => void
}

const Navbar: React.FC<Props> = ({ isDark, toggleTheme }) => {
  const { pathname } = useLocation()
  const { scrollY } = useScroll()
  const [openDropdown, setOpenDropdown] = useState(false)
  const backgroundColor = useTransform(
    scrollY,
    [0, 80],
    [`rgba(0 0 0 / 0)`, `rgb(0 0 0 / 0.5)`]
  )

  const toggleDropdown = () => {
    setOpenDropdown(prev => !prev)
  }

  return (
    <Nav style={{ backgroundColor }}>
      <Wrapper>
        <Logo>
          <Link to="/">
            <Catpaw />
            <span>Hotaroo</span>
          </Link>
        </Logo>

        <Tabs>
          <Tab>
            <Link to="/works">
              Works{' '}
              {pathname === '/works' && <Underline layoutId="underline" />}
            </Link>
          </Tab>
          <Tab>
            <Link to="/posts">
              Posts{' '}
              {pathname === '/posts' && <Underline layoutId="underline" />}
            </Link>
          </Tab>
          <Tab>
            <a
              href="https://github.com/Rolo-coding/hotaroo-homepage"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
              <span>Source</span>
            </a>
          </Tab>
        </Tabs>

        <div style={{ flex: 1 }}></div>

        <ButtonWrapper onClick={toggleTheme} isDark={isDark}>
          <Button isDark={!isDark}>
            <Sun />
          </Button>
          <Button isDark={isDark}>
            <Moon />
          </Button>
        </ButtonWrapper>

        <Dropdown>
          <button onClick={toggleDropdown}>
            <Hamburger />
          </button>

          <Menu
            variants={menuVaraints}
            initial={false}
            animate={openDropdown ? 'expanded' : 'collapsed'}
            transition={{ type: 'tween', duration: 0.15 }}
          >
            <Item>
              <Link to="/">
                <span>About</span>
              </Link>
            </Item>
            <Item>
              <Link to="/">
                <span>Works</span>
              </Link>
            </Item>
            <Item>
              <Link to="/">Posts</Link>
            </Item>
            <Item>
              <a href="https://github.com/Rolo-coding/hotaroo-homepage">
                Source
              </a>
            </Item>
          </Menu>
        </Dropdown>
      </Wrapper>
    </Nav>
  )
}

export default Navbar
