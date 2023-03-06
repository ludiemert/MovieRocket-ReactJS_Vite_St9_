import { FiSearch } from 'react-icons/fi';

import { Link } from 'react-router-dom';

import { Container, Brand, Profile, Logout } from './styles';
import { RiShutDownLine } from 'react-icons/ri';

import { Input } from '../Input';

export function Header() {
  return(
    <Container>
      <div className="container">      

      <Brand>
      <h1>RocketMovies</h1>
      </Brand>  

          <Input
              type={'text'}
              placeholder="Search by Title" icon={FiSearch} />


          <Profile to="/profile">

          <div>
             <strong>Luciana Diemert</strong>
             <Link to="/register">
              <Logout> Exit
                <RiShutDownLine/>
              </Logout>       
              </Link>   
            </div>

            <img 
              src="https://github.com/ludiemert.png"
              alt="User Photo" />            
          </Profile>
      </div>
    </Container>
  );
}