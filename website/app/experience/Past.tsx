"use client";

import { Col, Row } from "react-bootstrap";
import Header from "@/components/Header";
import Section from "@/components/Section";
import EmployerCard, { EmployerCardProps } from "./EmployerCard";

const PREVIOUS_EMPLOYERS: EmployerCardProps[] = [
  {
    name: "TradeWeb",
    description: `
    Tradeweb offers electronic over-the-counter (OTC) marketplaces for trading fixed income products, ETFs, and derivatives.
    The company offers market participants unparalleled liquidity and a broad range of data solutions. 
    `,
    link: "https://www.tradeweb.com/",
    image: "/tradeweb.svg",
    altText: "The Tradeweb Logo",
  },
  {
    name: "Amazon Robotics",
    description: `
    Amazon Robotics is a subsidiary of Amazon that designs, manufactures, and operates robots used in fulfillment centers.
     The company's robots are used to move products around warehouses and sort them for shipping. 
  `,
    link: "https://www.amazon.jobs/en/teams/amazon-robotics",
    image: "/amazon-robotics.svg",
    altText: "The Amazon Robotics Logo",
  },
];

const Past = () => {
  return (
    <Section>
      <Header>Wrote &#127837; Code At</Header>
      <Row>
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
