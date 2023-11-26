import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import {
  Box,
  ChakraProvider,
  extendTheme,
  defineStyle,
  defineStyleConfig,
} from '@chakra-ui/react';
import DirExplorer from '../components/DirExplorer';
import { ItemsProvider } from '../hooks/ItemsContext';

export default function App() {
  const darkTooltip = defineStyle({
    background: 'black',
  });

  const tooltipTheme = defineStyleConfig({
    variants: { darkTooltip },
  });
  const theme = extendTheme({
    components: { tooltip: tooltipTheme },
  });

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
