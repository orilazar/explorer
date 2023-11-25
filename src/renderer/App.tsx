import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Box, ChakraProvider, extendBaseTheme } from '@chakra-ui/react';
import DirExplorer from '../components/DirExplorer';

export default function App() {
  const theme = extendBaseTheme({});
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<DirExplorer />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}
