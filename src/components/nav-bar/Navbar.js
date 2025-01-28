import React, { useState } from 'react'
import styled from 'styled-components'
import Home from './../../pages/Home'
import { useLocation, useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <Wrapper>
      <TitleContainer>
        <Title>Gayatri Lavanya Ponnada</Title>
      </TitleContainer>
      <TabsContainer>
        <Tab onClick={() => navigate('/')} active={location.pathname === '/'}>
          Home
        </Tab>
        <Tab
          onClick={() => navigate('/about')}
          active={location.pathname === '/about'}
        >
          About
        </Tab>
        <Tab>Education</Tab>
        <Tab>Skills</Tab>
        <Tab>Work</Tab>
        <Tab>Contact</Tab>
      </TabsContainer>
    </Wrapper>
  )
}

export default Navbar

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 3.5rem;
  padding: 1rem 2rem;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
`
const TitleContainer = styled.div`
  position: relative;
`

const Title = styled.div`
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 0.5px;
  color: #16404d;
`
const TabsContainer = styled.div`
  position: relative;
  display: flex;
  gap: 2rem;
`
const Tab = styled.div`
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0.5px;
  color: #16404d;
  cursor: pointer;
  border-bottom: ${(props) => (props.active ? '2px solid #16404d' : '')};
`
