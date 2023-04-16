import './App.css';
import { Fragment } from 'react';
import Form from "./components/Form"
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';

function App() {

  const handleSubmit = (valores) => {
      console.log("APPJS: ", valores);
  }

  return (
    <Fragment>
      <Container component="section" maxWidth="sm">
        <Typography variant="h4" align="center" marginTop="40px">
          Formulario de registro Alura
        </Typography>
        <Form handleSubmit={handleSubmit} />
        <Typography marginTop="40px">Desarrollado por <a href="https://soriadev.netlify.app" target="_blank" rel="noopener noreferrer">Soria-Dev</a></Typography>
      </Container>
    </Fragment>
  );
}

export default App;
