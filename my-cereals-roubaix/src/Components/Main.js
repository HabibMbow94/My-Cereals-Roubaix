import React from 'react';
import {Row, Col, Button} from 'reactstrap';
const Main = props => {
  return (
    <div className="main">
      <Row noGutters className="align-items">
        <Col>
          <p className="looking-for-table">
            Reserver votre repas et table
          </p>
          <Button 
            color="none" className="book-table-btn"
            onClick= {() => {props.setpage(1)}}
          >
            Book a Table
          </Button>
        </Col>
      </Row>
      
    </div>
  );
};

export default Main;

/*
export default props => {
  return (
    <div>
     <img 
            src="./images/cafe.jpg" alt="cafe" className="big-img"
          />
      <Row noGutters className="text-center align-items-center pizza-cta">
        <Col>
          <p className="looking-for-pizza">
            If you're looking for great pizza
            <i className="fas fa-pizza-slice pizza-slice"></i>
          </p>
          <Button
            color="none"
            className="book-table-btn"
            onClick={_ => {
              props.setPage(1);
            }}
          >
            Book a Table
          </Button>
        </Col>
      </Row>
      <Row noGutters className="text-center big-img-container">
        <Col>
          <img
            src="./images/cafe.jpg"
            alt="cafe"
            className="big-img"
          />
        </Col>
      </Row>
    </div>
  );
};
*/