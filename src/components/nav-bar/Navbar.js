import React, { useState } from 'react'
import styled from 'styled-components'
import MenuContainer from './MenuContainer'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <Wrapper>
      {!menuOpen && (
        <svg
          onClick={() => setMenuOpen(true)}
          xmlns='http://www.w3.org/2000/svg'
          height='1.2rem'
          viewBox='0 -960 960 960'
          width='1.2rem'
          fill='#5f6368'
        >
          <path d='M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z' />
        </svg>
      )}

      {menuOpen && (
        <MenuContainer menuOpen={menuOpen} close={() => setMenuOpen(false)} />
      )}
    </Wrapper>
  )
}

export default Navbar

const Wrapper = styled.div`
  margin: 0.5rem;
  display: flex;
  justify-content: flex-end;
  svg {
    cursor: pointer;
  }
`
