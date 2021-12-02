import React, { useState, useEffect } from 'react';
import './App.css';
import Table from './Table';
import Pagination from './Pagination';
import { db } from './index.js'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function Food_Info(props) {
  let [catagori, setCatagori] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  let { id } = useParams();


  useEffect(() => {
    //sector 값만 바꿔서 돌리면 분류되서 쭈르륵 뜹니다. 테이블, 페이지먼트 안건드려도 됩니둥
    var users = db.collection("shop").limit(100).where("sector", "==", props.section[id]);
    users.get()
      .then(query => {
        // var array = query.map(a => a.data());
        // console.log(array);
        var array = []
        query.forEach(function (doc) {
          array.push(doc.data());
        });
        setCatagori(array);
      })
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = catagori.slice(indexOfFirstPost, indexOfLastPost);

  // 페이징
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <Container>
      
      <Table table_data={currentPosts}/>
      <Pagination postsPerPage={postsPerPage} totalPosts={catagori.length} paginate={paginate} />
      <br />

    </Container>

  )

}


export default Food_Info;
