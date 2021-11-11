import './App.css';
import React,{useState,useEffect} from 'react';
import {Button,Navbar,Nav,Container,Card} from 'react-bootstrap';
import {db} from './index.js'
import "firebase/firestore"; 


function App() {
  let[catagori,setCatagori]= useState([]);

  useEffect(() => {
  var users = db.collection("shop");
      users.get()
      .then( query => {
        // var array = query.map(a => a.data());
        // console.log(array);
        var array = []
        query.forEach(function(doc) {
          array.push(doc.data());         
        });
        setCatagori(array);
      })
      console.log(catagori.slice(0,5));
  }, []);

  return (
    
    <div className="App">
      <head>
      {/* react-bootstrap cdn*/}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />

      </head>
      {/* Nav  */}
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Suvin_5dwarp</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">홈</Nav.Link>
          <Nav.Link href="#features">상세페이지</Nav.Link>
          <Nav.Link href="#pricing">게시판</Nav.Link>
        </Nav>
          <Button variant="primary">Login</Button>
        </Container>
        </Navbar>
        {/* 내용시작 */}

        <body className= "body">
          <br/>
          <Container>
            {
              catagori.map(function(a){
                return (
                  <>
                  <div class="row">
                    <div className="col-md-2"></div>

                    <div className="row col-md-7">
                    <div class="col-sm-6"><Section/></div>
                    <div className="col-sm-2"/>
                    <div class="col-sm-4"><Section/></div>
                    </div>
                    <div class="col-md-6"></div>
                  </div>
                  <br/>
                  </>
                )
              })
            }


          </Container>
        

        </body>

        
      
      {/* footer */}
      <footer className="py-4 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; 2021웹지국 & 2020복지국
          </p>

        </div>
      </footer>

      
    </div>
  );
}

function Section(){
  return(
    <>
      <Card style={{ width: '18rem' ,height :'18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>슈퍼 편의점</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  )
}
export default App;
