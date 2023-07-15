"use client";

import { Navbar, Container, Nav } from "@/app/components/bootstrap";
import Link from "next/link";

interface NavigationItem {
  name: string;
  href: string;
}

const NAV_ITEMS: NavigationItem[] = [
  {
    name: "About",
    href: "/",
  },
  {
    name: "Experience",
    href: "/experience",
  },
];

const renderNavItems = (items: NavigationItem[]) =>
  items.map((item, index) => {
    return (
      <Nav.Item key={index}>
        <Nav.Link
          href={item.href}
          eventKey={index}
          className="fs-4 fw-lighter"
          as={Link}
        >
          {item.name}
        </Nav.Link>
      </Nav.Item>
    );
  });

const MainNavBar = () => {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand className="fs-2 fw-bold" href="#">
          Tim&apos;s Corner
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav justify variant="underline">
            {renderNavItems(NAV_ITEMS)}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavBar;
