"use client";

import { Col, Row } from "react-bootstrap";
import Header from "../common/Header";
import Section from "../common/Section";
import EmployerCard, { EmployerCardProps } from "./EmployerCard";

const PREVIOUS_EMPLOYERS: EmployerCardProps[] = [
  {
    name: "TradeWeb",
    description: `
    Tradeweb offers electronic over-the-counter (OTC) marketplaces for trading fixed income products, ETFs, and derivatives.
    The company offers institutional, wholesale and retail market participants unparalleled liquidity, advanced technology and a broad range of data solutions that deliver better price discovery, order execution and trade workflows. 
    `,
    link: "https://www.tradeweb.com/",
    image: "/tradeweb.svg",
    altText: "The Tradeweb Logo",
  },
];

const Past = () => {
  return (
    <Section>
      <Header>Wrote &#127837; Code At</Header>
      <Row md="auto">
        {PREVIOUS_EMPLOYERS.map((employer, index) => (
          <Col key={index}>
            <EmployerCard {...employer}></EmployerCard>
          </Col>
        ))}
      </Row>
    </Section>
  );
};

export default Past;
