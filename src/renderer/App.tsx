import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Box } from '@chakra-ui/react';
import DirExplorer from '../components/DirExplorer';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DirExplorer />} />
      </Routes>
    </Router>
  );
}
