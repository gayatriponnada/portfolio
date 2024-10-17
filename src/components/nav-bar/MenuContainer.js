import React from 'react'
import styled from 'styled-components'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router-dom'

const MenuContainer = ({ menuOpen, close }) => {
  // const location = useLocation()
  const navigate = useNavigate()

  const NavigateToPage = (path) => {
    navigate(path)
    close()
  }
  return (
    <Wrapper menuOpen={menuOpen}>
      <ButtonContainer>
        <Button>
          {menuOpen && (
            <svg
              onClick={close}
              xmlns='http://www.w3.org/2000/svg'
              height='1.2rem'
              viewBox='0 -960 960 960'
              width='1.2rem'
              fill='#5f6368'
            >
              <path d='m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z' />
            </svg>
          )}
        </Button>
      </ButtonContainer>
      <TextContainer>
        <Text onClick={() => NavigateToPage('/')}>Home</Text>
        <Text onClick={() => NavigateToPage('/about')}>About</Text>
        <Text onClick={() => NavigateToPage('/work')}>Work</Text>
      </TextContainer>
      <SecondaryText>
        <Title>Social Media</Title>
        <MediaContainer>
          <Container>
            <FaLinkedin className='icon' />
            <Media>LinkedIn</Media>
          </Container>
          <Container>
            <FaGithub className='icon' />
            <Media>Github</Media>
          </Container>
        </MediaContainer>
      </SecondaryText>
    </Wrapper>
  )
}

export default MenuContainer

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 30vw;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 0.8rem;
  background-color: #17242a;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 10px;
  transition: all 0.5s ease-in-out;
`

const ButtonContainer = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
`

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`

const TextContainer = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  // justify-content:center;
  align-items: center;
  gap: 1rem;
  svg {
    color: white;
    cursor: pointer;
    color: white;
  }
`
const Text = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: white;
  cursor: pointer;
`
const SecondaryText = styled.div`
  position: relative;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  // align-items: center;
  gap: 0.5rem;
`
const Title = styled.div`
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.5px;
  color: white;
`
const MediaContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  .icon {
    color: white;
  }
`

const Media = styled.div`
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: white;
`
