import { FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form, Background} from "./styles";



export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Application to follow everything you watch!!!</p>

        <h2>Sign In</h2>

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />

        <Input
          placeholder="Password"
          type="Password"
          icon={FiLock}
        />

        <Button title="Enter" />  

        <Link to="/register">
          Create Account
        </Link>
      </Form>

      <Background />

    </Container>
  );
}