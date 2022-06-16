import React from 'react';
import { Container } from '@mui/material';
import Header from './components/header';
import About from './components/about/about';

const App: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <Header />
      <About />
    </Container>
  );
}

export default App;
