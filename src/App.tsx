import React from 'react';
import { Container } from '@mui/material';
import Header from './components/header';

const App: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <Header />
    </Container>
  );
}

export default App;
