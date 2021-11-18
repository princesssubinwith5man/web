import React from 'react';
import { Card, Button } from 'react-bootstrap';

// 처음에 고르는 카드 

function Section(props) {
  return (
    <>
      <Card style={{ width: '18rem', height: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <br /><br />
          <Card.Title>{props.section[props.i]}</Card.Title>
          <Card.Text>
            <br /><br />
          </Card.Text>
          <Button variant="primary" onClick={() => { window.location.href = "/" + props.i + "/" }}> Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default Section;