import React from 'react'
import styled from 'styled-components'
import { IoIosDownload } from 'react-icons/io'
import AboutMeImage from './../assets/AboutMeImage.jpg'

const About = () => {
  return (
    <Wrapper>
      <TitleContainer>
        <Title>About Me</Title>
        <Subtitle>My introduction</Subtitle>
      </TitleContainer>
      <Container>
        <ImageContainer>
          <Image src={AboutMeImage} alt='Your Image' />
        </ImageContainer>
        <ContentContainer>
          <Content>
            I'm a frontend developer passionate about building sleek,
            responsive, and user-friendly websites, transforming concepts into
            functional, visually appealing experiences with smooth interactions.
          </Content>
          <ExpContainer>
            <Exp>
              01
              <span>Experience</span>
            </Exp>
            <Exp>
              02
              <span>Projects</span>
            </Exp>
            <Exp>
              02
              <span>Companies Worked</span>
            </Exp>
          </ExpContainer>
          <Button>
            Download CV <IoIosDownload />
          </Button>
        </ContentContainer>
      </Container>
    </Wrapper>
  )
}

export default About

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`
const TitleContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`
const Title = styled.div`
  font-weight: 600;
  font-size: 2rem;
  letter-spacing: 0.5px;
  color: #16404d;
`
const Subtitle = styled.div`
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0.5px;
  color: #5c7285;
`
const Container = styled.div`
  position: relative;
  width: 50%;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
`
const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  
`
const Image = styled.img`
  width: 15rem;
  height: 15rem;
  border-radius: 10%;
`
const ContentContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`
const Content = styled.div`
  position: relative;
  width: 100%;
  font-size: 1rem;
  letter-spacing: 0.5px;
  color: #5c7285;
`
const ExpContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
`
const Exp = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: #16404d;
  span {
    white-space: nowrap;
    font-weight: 400;
    font-size: 0.8rem;
    letter-spacing: 0.5px;
    color: #5c7285;
  }
`
const Button = styled.button`
  position: relative;
  width: 50%;
  padding: 0.5rem;
  background-color: #16404d;
  color: #ffff;
  border: none;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`
