import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import LoginForm from "./components/LoginForm";
import News from "./components/News";

function App() {
  const [menu, setMenu] = useState("/news");

  const handleMenuSelected = (selectedKey) => {
    setMenu(selectedKey);
  }

  return (
    <Container>
      <Row>
        <Col className="mb-3">
          <Nav variant="tabs" activeKey={menu} onSelect={handleMenuSelected}>
            <Nav.Item>
              <Nav.Link href="/news">News</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="/login">Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="/about">About</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
      <Row>
        <Col>{menu === "/login" ? <LoginForm /> : <News />}</Col>
      </Row>
    </Container>
  );
}

export default App;
