"use client";

import { Row, Col } from "react-bootstrap";
import EmployerCard, { EmployerCardProps } from "./EmployerCard";

const LOGO_HEIGHT = 100;
const LOGO_WIDTH = 250;
const PREVIOUS_EMPLOYERS: EmployerCardProps[] = [
  {
    employer: {
      name: "TradeWeb",
      description: `
    Tradeweb offers electronic over-the-counter (OTC) marketplaces for trading fixed income products, ETFs, and derivatives.
    The company offers market participants unparalleled liquidity and a broad range of data solutions. 
    `,
      link: "https://www.tradeweb.com/",
    },
    image: {
      image: "/tradeweb.svg",
      height: LOGO_HEIGHT,
      width: LOGO_WIDTH,
      altText: "The Tradeweb Logo",
    },
  },
  {
    employer: {
      name: "Amazon Robotics",
      description: `
    Amazon Robotics is a subsidiary of Amazon that designs, manufactures, and operates robots used in fulfillment centers.
     The company's robots are used to move products around warehouses and sort them for shipping. 
  `,
      link: "https://www.amazon.jobs/en/teams/amazon-robotics",
    },
    image: {
      image: "/amazon-robotics.svg",
      height: LOGO_HEIGHT,
      width: LOGO_WIDTH,
      altText: "The Amazon Robotics Logo",
    },
  },
];

const PastGrid = () => {
  return (
    <Row>
      {PREVIOUS_EMPLOYERS.map((employer, index) => (
        <Col key={index}>
          <EmployerCard {...employer}></EmployerCard>
        </Col>
      ))}
    </Row>
  );
};

export default PastGrid;
