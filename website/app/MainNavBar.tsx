"use client";

import { Navbar, Container, Nav } from "@/components/bootstrap";

const MainNavBar = () => {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand className="fs-2 fw-bold" href="#">
          Tim&apos;s Corner
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav justify variant="underline" defaultActiveKey="#tech-carousel">
            <Nav.Link href="#tech-carousel" className="fs-4 fw-lighter">
              Techs
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavBar;
