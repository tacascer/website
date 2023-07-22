"use client";

import { Navbar, Container, Nav } from "react-bootstrap";
import { selectActive, setActive } from "./navSlice";
import { useAppDispatch, useAppSelector } from "../hooks";
import { DEFAULT_ACTIVE_ITEM } from "./navSlice";

type NavigationItem = {
  name: string;
  href: string;
};

const NAV_ITEMS: NavigationItem[] = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Books",
    href: "#book",
  },
];

const renderNavItems = (items: NavigationItem[]) =>
  items.map((item, index) => {
    return (
      <Nav.Item key={index} data-to-scrollspy-id={`${item.href.substring(1)}`}>
        <Nav.Link
          href={item.href}
          eventKey={`${item.href.substring(1)}`}
          className="fs-4 fw-lighter"
        >
          {item.name}
        </Nav.Link>
      </Nav.Item>
    );
  });

const MainNavBar = () => {
  function updateActive(id: string | null) {
    if (id) dispatch(setActive(id));
  }
  const active = useAppSelector(selectActive);
  const dispatch = useAppDispatch();

  return (
    <Navbar
      id="navbar"
      expand="lg"
      fixed="top"
      collapseOnSelect
      className="bg-light"
    >
      <Container>
        <Navbar.Brand className="fs-2 fw-bold" href="#">
          Tim&apos;s Corner
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav
            fill
            variant="underline"
            defaultActiveKey={DEFAULT_ACTIVE_ITEM}
            activeKey={active}
            onSelect={updateActive}
          >
            {renderNavItems(NAV_ITEMS)}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavBar;
