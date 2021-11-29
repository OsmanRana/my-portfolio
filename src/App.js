
import { Container } from '@mui/material';
import './App.css';
import ContactForm from './components/Home/ContactForm/ContactForm';

import Home from './components/Home/Home/Home';
import Projects from './components/Home/Projects/Projects';

function App() {
  return (
    <Container>
      <Home></Home>
      <Projects></Projects>
      <ContactForm></ContactForm>
    </Container>
  );
}

export default App;
