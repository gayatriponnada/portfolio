import React from 'react'
import Navbar from '../components/nav-bar/Navbar'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const OutletPage = () => {
  return (
    <Wrapper>
      <NavBarContainer>
        <Navbar />
      </NavBarContainer>
      <BodyContainer>
        <Outlet />
      </BodyContainer>
    </Wrapper>
  )
}

export default OutletPage
const Wrapper = styled.div`
  position: relative;
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
`
const NavBarContainer = styled.div`
  position: relative;
  // width: 100%;
  //height: 6rem;
  overflow: hidden;
  background-color: var(--white);
`
const BodyContainer = styled.div`
  position: relative;
  width: 100vw;
  height: calc(100vh - 3.5rem);
  padding: 1rem;
`
