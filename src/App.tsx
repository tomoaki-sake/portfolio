import React from 'react';
import { Container } from '@mui/material';
import Header from './components/header';
import About from './components/about';
import Profile from './components/profile';

const App: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <Profile />
      <About />
    </Container>
  );
}

export default App;
