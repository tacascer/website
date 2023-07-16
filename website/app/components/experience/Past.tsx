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
  {
    name: "Amazon Robotics",
    description: `
  Amazon Robotics is a subsidiary of Amazon that automates fulfillment center operations using various methods of robotic technology including autonomous mobile robots, sophisticated control software, language perception, power management, computer vision, depth sensing, machine learning, object recognition, and semantic understanding of commands.
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
      <Row className="justify-content-center">
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
