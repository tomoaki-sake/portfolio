import React from 'react';
import { Container } from '@mui/material';
import Header from './components/header';
import About from './components/about';
import Profile from './components/profile';
import Skills from './components/skills';

const App: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <Profile />
      <About />
      <Skills />
    </Container>
  );
}

export default App;
