import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import styled, { css } from 'styled-components'
import { Catpaw, Github, Sun, Moon, Hamburger } from './svg'

const Container = styled(motion.header)`
  z-index: 2;
  width: 100%;
  position: sticky;
  top: 0;
  backdrop-filter: blur(10px);
`

const flex = css`
  display: flex;
  align-items: center;
`

const Wrapper = styled.div`
  width: 100%;
  max-width: 64rem;
  margin-inline: auto;
  padding: 0.5rem 0.625rem;
  gap: 0.75rem;
  ${flex}
`

const Logo = styled(motion.div)`
  svg {
    width: 2rem;
    height: 2rem;
  }

  a {
    padding: 0.5rem;
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 1.75;
    letter-spacing: -0.025em;
    ${flex}
  }
`

const Tabs = styled.ul`
  flex: 1;
  display: none;
  gap: 1.5rem;
  align-items: center;
  a {
    ${flex}
  }

  @media screen and (min-width: 40rem) {
    display: flex;
  }
`

const Tab = styled.li`
  position: relative;
  a {
    gap: 0.25rem;
    font-weight: 400;
    padding: 0.5rem;
    padding-bottom: 0.25rem;
    &:hover {
      color: ${props => props.theme.accent};
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
  background-color: #38b2ac;
`

const BtnWrapper = styled.div<{ isDark: boolean }>`
  padding: 1px;
  background-color: ${props => (props.isDark ? 'rgb(82 82 91)' : '#805ad5')};
  border-radius: 1.5rem;
  cursor: pointer;
  &,
  & > button {
    transition: all 0.15s ease-in-out;
  }
  ${flex}
`

const Button = styled.button<{ isDark: boolean }>`
  padding: 0.5rem;
  color: ${props => (props.isDark ? '#000' : '#fff')};
  background-color: ${props => (props.isDark ? '#fff' : 'transparent')};
  border-radius: 1.5rem;
`

const Dropdown = styled(motion.div)`
  position: relative;
  button {
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

    @media screen and (min-width: 40rem) {
      display: none;
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

const emptyVariants = {}

const logoVariants = {
  normal: { transform: 'rotate(-30deg)' },
  active: {
    transform: 'rotate(0deg)',
    transition: { type: 'tween', duration: 0.2 }
  }
}

const menuVariants = {
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
  const [openDropdown, setOpenDropdown] = useState(false)
  const { pathname } = useLocation()
  const { scrollY } = useScroll()
  const bg = isDark ? '0 0 0' : '255 255 255'
  const backgroundColor = useTransform(
    scrollY,
    [0, 60],
    [`rgb(${bg} / 0)`, `rgb(${bg} / 0.67)`]
  )

  const toggleDropdown = () => {
    setOpenDropdown(prev => !prev)
  }

  return (
    <Container style={{ backgroundColor }}>
      <Wrapper>
        <Logo variants={emptyVariants} initial="normal" whileHover="active">
          <Link to="/">
            <Catpaw variants={logoVariants} />
            <span>Hotaroo</span>
          </Link>
        </Logo>

        <nav>
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
                href="https://github.com/hotaroo-dev/hotaroo-homepage"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github />
                <span>Source</span>
              </a>
            </Tab>
          </Tabs>
        </nav>

        <div style={{ flex: 1 }}></div>

        <BtnWrapper onClick={toggleTheme} isDark={isDark}>
          <Button isDark={!isDark}>
            <Sun />
          </Button>
          <Button isDark={isDark}>
            <Moon />
          </Button>
        </BtnWrapper>

        <Dropdown>
          <button onClick={toggleDropdown}>
            <Hamburger />
          </button>

          <Menu
            variants={menuVariants}
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
    </Container>
  )
}

export default Navbar
