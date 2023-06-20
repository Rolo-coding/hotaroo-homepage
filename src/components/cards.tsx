import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { Text, spring } from '../style'
import { IData } from '../data'

interface IProps {
  name: string
  data: IData[]
  offset?: number
}

const Cards: React.FC<IProps> = ({ name, data, offset }) => {
  const [loading, setLoading] = useState(true)
  const filename = useMemo(() => name.slice(0, -1), [])

  return (
    <Container>
      {data.slice(0, offset).map((d, idx) => (
        <li key={idx}>
          {loading && (
            <Skeleton>
              <Card></Card>
              <Overview></Overview>
            </Skeleton>
          )}
          <motion.div
            variants={box}
            initial={false}
            animate={loading ? 'hidden' : 'visible'}
            transition={spring}
          >
            <Flex
              as="a"
              href={
                name === 'works'
                  ? `https://github.com/hotaroo-dev/${d.title.replace(
                      /\s/g,
                      '-'
                    )}`
                  : `https://www.tiktok.com/@hotarooooooo/video/${d.title}`
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              {name === 'works' ? (
                <picture>
                  <source
                    media="(max-width: 40rem)"
                    srcSet={`./${name}/${filename}${idx}-min.jpg`}
                  />
                  <source
                    srcSet={`./${name}/${filename}${idx}.webp`}
                    type="image/webp"
                  />
                  <Image
                    as="img"
                    src={`./${name}/${filename}${idx}.jpg`}
                    alt={d.title}
                    onLoad={() => setTimeout(() => setLoading(false), 800)}
                  />
                </picture>
              ) : (
                <Image
                  as="video"
                  autoPlay
                  muted
                  loop
                  onLoadedData={() => setLoading(false)}
                >
                  <source
                    src={`./${name}/${filename}${idx}.mp4`}
                    type="video/mp4"
                  />
                </Image>
              )}
              <Overview>{d.description}</Overview>
            </Flex>
          </motion.div>
        </li>
      ))}
    </Container>
  )
}

const Container = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.75rem;
  li {
    position: relative;
  }

  @media screen and (min-width: 40rem) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const Flex = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Card = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 0.5rem;
`

const Image = styled(Card)`
  box-shadow: #0003 0px 1px 2px 0px, #0002 0px 1px 3px 1px;
`

const Overview = styled(Text)`
  margin-top: 0.75rem;
  opacity: 0.8;
`

const Skeleton = styled(Flex)`
  position: absolute;
  inset: 0;
  p {
    width: 80%;
    margin-top: 1.2rem;
    min-height: 1.5rem;
    border-radius: 4px;
  }
  div,
  p {
    position: relative;
    overflow: hidden;
    background-color: ${props => props.theme.cardColor};
    transition: background-color 0.25s ease-in-out;
  }
  div::after,
  p::after {
    content: '';
    position: absolute;
    inset: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      transparent 0,
      rgb(${props => props.theme.skeleton} / 0.2) 20%,
      rgb(${props => props.theme.skeleton} / 0.5) 50%,
      transparent
    );
    animation: shimmer 2s infinite;
  }
  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
`

const box = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

export default Cards
