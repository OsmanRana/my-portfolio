
import { Container } from '@mui/material';
import './App.css';
import HomePage from './components/Home/HomePage/HomePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectDetails from './components/Home/Projects/ProjectDetails';

function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="projectDetail:projectDetailId" element={<ProjectDetails/>}>
          <Route path=":projectDetailId" element={<ProjectDetails />} />
          </Route>
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
