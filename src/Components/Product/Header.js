import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "./Header.css";
import { Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
export const Header = ({cart}) => {
  return (
    <>
      <Container fluid className="bg-success fixed-top">
        <Row>
          <Col className="text-white my-4">Product cart</Col>
          <Col></Col>
          <Col>
            <ListGroup horizontal className="my-3 justify-content-end">
              <ListGroupItem className=" nav-link bg-transparent">
                <Link className="nav-link" to={"/"}>
                  Home
                </Link>
              </ListGroupItem>
              <ListGroupItem className="nav-link bg-transparent">
                <Link className="nav-link" to={"/Viewcart"}>
                <span className="cart-num">{cart.length}</span> 
                  View Cart
                </Link>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};
