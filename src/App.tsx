import React from 'react'
import { Container } from '@mui/material'
import About from './components/about'
import Profile from './components/profile'
import Skills from './components/skills'
import Works from './components/works'

const App: React.FC = () => {
  return (
    <Container maxWidth='xl' style={{ marginBottom: 100 }}>
      <Profile />
      <About />
      <Skills />
      <Works />
    </Container>
  )
}

export default App
