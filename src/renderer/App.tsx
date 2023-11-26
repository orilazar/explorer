import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Box, ChakraProvider, extendBaseTheme } from '@chakra-ui/react';
import DirExplorer from '../components/DirExplorer';
import { ItemsProvider } from '../hooks/ItemsContext';

export default function App() {
  const theme = extendBaseTheme({});
  return (
    <ChakraProvider theme={theme}>
      <ItemsProvider>
        <Router>
          <Routes>
            <Route path="/" element={<DirExplorer />} />
          </Routes>
        </Router>
      </ItemsProvider>
    </ChakraProvider>
  );
}
