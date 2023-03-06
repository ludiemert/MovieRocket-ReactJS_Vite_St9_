import { Container, Form, Background} from "./styles";

import { Link } from 'react-router-dom';

import { FiMail, FiLock, FiUser, FiArrowLeft  } from 'react-icons/fi';

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";



export function SignUp() {
  return (
    <Container>

      <Background />

      <Form>
        <h1>RocketMovies</h1>
        <p>Application to follow everything you watch!!!</p>

        <h2>Create Your Account</h2>


        <Input
          placeholder="Name"
          type="text"
          icon={FiUser}
        />
        
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

        <Button title="Register" />  

        <Link to="/">
          <FiArrowLeft />    
            Return to Login
        </Link>

      </Form>

    </Container>
  );
}