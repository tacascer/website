"use client";

import { Navbar, Container, Nav } from "react-bootstrap";

interface NavigationItem {
  name: string;
  href: string;
}

const NAV_ITEMS: NavigationItem[] = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Experience",
    href: "#experience",
  },
];

const renderNavItems = (items: NavigationItem[]) =>
  items.map((item, index) => {
    return (
      <Nav.Item key={index}>
        <Nav.Link href={item.href} eventKey={index} className="fs-4 fw-lighter">
          {item.name}
        </Nav.Link>
      </Nav.Item>
    );
  });

const MainNavBar = () => {
  return (
    <Navbar id="navbar" expand="lg" sticky="top" className="bg-light">
      <Container fluid>
        <Navbar.Brand className="fs-2 fw-bold" href="#">
          Tim&apos;s Corner
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav fill variant="underline" defaultActiveKey={0}>
            {renderNavItems(NAV_ITEMS)}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavBar;
