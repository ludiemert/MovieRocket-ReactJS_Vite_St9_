import { FiArrowLeft } from "react-icons/fi";

import { Link } from "react-router-dom";

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { NoteItem } from "../../components/NoteItem";
import { Textarea } from '../../components/Textarea';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';

import { Container, Form } from "./styles";

export function New_Movie() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
              <Link to="/">    
              <FiArrowLeft />                 
                    Return
                </Link> 
              
                <h1>New Movie</h1>                
          </header>

          <div className="flex">
              <Input placeholder="Title" />
              <Input 
                placeholder="Your Note (from 0 to 5)"
                type="number"
                min="0"
                max="5"
              ></Input>
            </div>

            <Textarea placeholder="Comments" />

            <Section>
              <h1>Bookmark</h1>
              <div className="tags">
              <NoteItem value="Documentary"/>
              <NoteItem isNew placeholder="New Bookmark"/>
              </div>
            </Section>


            <div className="books">
            <Button title="Delete Movie" />  
            <Button title="Save Editions" />  
           </div>

        </Form>
      </main>

     </Container>
  );
}