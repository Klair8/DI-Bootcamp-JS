import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import imdbLogo from './imdb.png';


function Bar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >
            <img
              alt=""
              src={imdbLogo} 
              width="50"
              height="50"
            /> {' '}
              </Navbar.Brand>
              <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          MOVIES APP 
          </Navbar.Text>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Bar;