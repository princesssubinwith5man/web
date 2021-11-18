// copyright 수빈공주와 6난쟁이들
// author : 봉규, 수빈 , 정협
// react

import './App.css';
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Button, Navbar, Nav, Container } from 'react-bootstrap';
// import {db} from './index.js'
import "firebase/firestore";
// FoodInfo.js 가져오기
import Info from './Food_Info.js'
import { Link, Route, Switch } from 'react-router-dom';
import Section from './Section';


function App() {

  //카테고리
  let [section, setSection] = useState(['슈퍼/편의점',
    '주유소',
    '도매 및 소매업',
    '숙박 및 음식점',
    '제조업',
    '운수업',
    '출판 등 정보서비스업',
    '보건, 사회복지 서비스업',
    '스포츠 등 기타 서비스업',
    '기타'])

  // useEffect(() => {
  // var users = db.collection("shop").limit(100);
  //     users.get()
  //     .then( query => {
  //       // var array = query.map(a => a.data());
  //       // console.log(array);
  //       var array = []
  //       query.forEach(function(doc) {
  //         array.push(doc.data());         
  //       });
  //       setCatagori(array);
  //     })
  //     console.log(catagori.slice(0,5));
  // }, []);

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
          <Navbar.Brand href="/">Suvin_5dwarp</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">홈</Nav.Link>
            <Nav.Link href="#pricing">게시판</Nav.Link>
          </Nav>
          <Button variant="primary">Login</Button>
        </Container>
      </Navbar>
      {/* 내용시작 */}

      <body className="body">
        <br />
        <Container>
          <Switch>
            <Route exact path='/'>
              <div class="row">
                {
                  section.map(function (a, i) {
                    return (
                      <>
                        <div className="col-md-6" >
                          <Section section={section} i={i}></Section>
                          <br />
                        </div>
                      </>
                    )
                  })
                }

              </div>
            </Route>
            <Route path='/:id'>
              <Info section={section} />
            </Route>
          </Switch>
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


export default App;
