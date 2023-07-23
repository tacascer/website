"use client";

import { Row, Col, Button } from "react-bootstrap";

type ContactInfo = {
  link: string;
  icon: string;
  ariaLabel: string;
};

const CONTACT_INFO: ContactInfo[] = [
  {
    link: "https://github.com/tacascer",
    icon: "bi bi-github",
    ariaLabel: "Github Profile",
  },
  {
    link: "https://www.linkedin.com/in/timtran2018/",
    icon: "bi bi-linkedin",
    ariaLabel: "LinkedIn Profile",
  },
  {
    link: "mailto:timdttran2000@gmail.com",
    icon: "bi bi-envelope",
    ariaLabel: "Email",
  },
];

export default function Footer() {
  return (
    <footer className="bg-light border-top sticky-bottom py-auto text-body-secondary">
      <div className="container">
        <Row className="justify-content-between align-items-center py-2">
          <Col md={4}>
            <p className="mb-0">Made with ☕ by @tacascer</p>
          </Col>
          <Col md={4} className="mb-0" as="address">
            <Row className="justify-content-end gx-2">
              {CONTACT_INFO.map((contactInfo, index) => (
                <Col key={index} className="col-md-auto">
                  <Button
                    variant="outline-primary"
                    href={contactInfo.link}
                    target="blank"
                    className="rounded-circle"
                  >
                    <i
                      aria-label={contactInfo.ariaLabel}
                      className={contactInfo.icon}
                    ></i>
                  </Button>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    </footer>
  );
}
