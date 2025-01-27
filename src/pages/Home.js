import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { RiFileListFill } from 'react-icons/ri'
import { IoIosArrowDroprightCircle } from 'react-icons/io'
import { MdArrowDownward } from 'react-icons/md'
import { CiDesktopMouse2 } from 'react-icons/ci'

const Home = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true)
    }, 100)
  }, [])

  return (
    <Wrapper>
      <Container isVisible={isVisible}>
        <DivContainer isVisible={isVisible}>
          <Div className='hi'>Hi,</Div>
          <Div className='name'>
            I'm
            <span>Gayatri Lavanya Ponnada</span>
          </Div>
          <Div className='work'>Web Developer</Div>
        </DivContainer>

        <Button isVisible={isVisible}>
          Contact Me <IoIosArrowDroprightCircle />
        </Button>
        <IconsContainer isVisible={isVisible}>
          <FaGithub className='icon' size={25} />
          <FaLinkedin className='icon' size={25} />
          <RiFileListFill className='icon' size={25} />
        </IconsContainer>
      </Container>
      <ScrollContainer isVisible={isVisible}>
        <CiDesktopMouse2 size={20} fill='#606676' />
        <Scroll>Scroll</Scroll>
        <MdArrowDownward size={20} fill='#606676' />
      </ScrollContainer>
    </Wrapper>
  )
}

export default Home

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;
`

const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 1rem;
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 3rem;
  border-left: 2px solid #16404d;

  opacity: ${(props) => (props.isVisible ? '1' : '0')};
  transform: ${(props) =>
    props.isVisible ? 'translateY(0)' : 'translateY(20px)'};
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;

  .hi,
  .name,
  .work {
    font-weight: 700;
    font-size: 2rem;
    letter-spacing: 0.5px;
    color: #16404d;
  }
  span {
    font-weight: 700;
    font-size: 2rem;
    letter-spacing: 0.5px;
    color: #0d92f4;
  }
`
const DivContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  opacity: ${(props) => (props.isVisible ? '1' : '0')};
  transform: ${(props) =>
    props.isVisible ? 'translateY(0)' : 'translateY(20px)'};
  transition: opacity 1.2s ease-in-out, transform 1.2s ease-in-out;
`

const Div = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
`
const Button = styled.button`
  position: relative;
  width: 10%;
  padding: 0.5rem;
  background-color: #0d92f4;
  color: #ffff;
  border: none;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  opacity: ${(props) => (props.isVisible ? '1' : '0')};
  transform: ${(props) =>
    props.isVisible ? 'translateY(0)' : 'translateY(20px)'};
  transition: opacity 1.4s ease-in-out, transform 1.4s ease-in-out;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`
const IconsContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  gap: 1rem;
  cursor: pointer;
  opacity: ${(props) => (props.isVisible ? '1' : '0')};
  transform: ${(props) =>
    props.isVisible ? 'translateY(0)' : 'translateY(20px)'};
  transition: opacity 1.6s ease-in-out, transform 1.6s ease-in-out;
  .icon {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    &:hover {
      transform: scale(1.6);
    }
  }
`
const ScrollContainer = styled.div`
  position: relative;
  width: 10rem;
  margin-left: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  opacity: ${(props) => (props.isVisible ? '1' : '0')};
  transform: ${(props) =>
    props.isVisible ? 'translateY(0)' : 'translateY(20px)'};
  transition: opacity 1.2s ease-in-out, transform 1.2s ease-in-out;
  animation: moveUpDown 1.5s infinite ease-in-out;

  @keyframes moveUpDown {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
`
const Scroll = styled.div`
  position: relative;
  width: fit-content;
  color: #16404d;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 0.5px;
`
