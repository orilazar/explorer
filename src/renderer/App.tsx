import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Box } from '@chakra-ui/react';

function Hello() {
  return (
    <Box position="fixed" right={0} bottom={0} width="20em" height="20em">
      <h1>a</h1>
    </Box>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
