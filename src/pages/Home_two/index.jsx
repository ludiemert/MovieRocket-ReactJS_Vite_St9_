import { FiPlus, FiSearch, FiArrowLeft } from 'react-icons/fi';

import { Link } from 'react-router-dom';

import { Container, Links, Returnn, Content } from './styles';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { ButtonText } from '../../components/ButtonText';
import { Section } from "../../components/Section";
import {Tag } from "../../components/Tag";
import { Button } from "../../components/Button";
import {Movie} from "../../components/Movie";


export function Home_two() { 
  return (
    <Container>
      <Header />
      <main>
      <Content>
       
          <div className="add">
          <h1>My Movies</h1>
          
      
          <Links to="/new_movie">
            <FiPlus />
            Add Movie
          </Links>

          </div>
          

          
            <Section>  
            <div className="show_movie">

            <h2>Interestellar</h2>
          <img 
              src="../../../src/assets/stars.png"
              alt="stars" />  
            
          <p>Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro
             de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. </p>
        
              <Movie             
              data={{
                title: 'Movie type',
                tags: [
                  {id: '1', name: 'Drama'},
                  {id: '2', name: 'Fiction'},
                  {id: '3', name: 'Documentary'} 
                ]
             } } />
              </div>

            </Section>

            <Returnn to="/" >
            <FiArrowLeft />
           Return Login
           </Returnn>

      </Content>
      </main>
    </Container>
  );
}

