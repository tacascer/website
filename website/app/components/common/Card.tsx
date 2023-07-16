"use client";

import { Card, Button } from "react-bootstrap";
import Image from "next/image";

const LOGO_WIDTH = 200;
const LOGO_HEIGHT = 200;

const CardComponent = ({
  name,
  image,
  altText,
  description,
  button,
}: CardProps) => {
  return (
    <Card className="border-0 gap-2">
      <Card.Img
        variant="top"
        src={image}
        alt={altText}
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        as={Image}
        quality={100}
        className="align-self-center shadow rounded-5 p-3"
        style={{
          // Hard coding dimensions here because Card component doesn't respect className
          width: `${LOGO_WIDTH}px`,
          height: `${LOGO_HEIGHT}px`,
        }}
      ></Card.Img>
      <Card.Body>
        <Card.Title as="h3" className="text-center text-primary">
          {name}
        </Card.Title>
        <div className="mx-auto d-none d-md-block col-lg-7">
          {cardTextFromDescription(description)}
          <Button
            variant="outline-primary"
            href={button.href}
            target="_blank"
            className="rounded-pill shadow d-grid col-4 mx-auto stretched-link"
          >
            {button.text}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

const cardTextFromDescription = (description: string) => {
  return description
    .trim()
    .split("\n")
    .map((sentence, index) => (
      <Card.Text key={index} className="text-body-secondary">
        {sentence}
      </Card.Text>
    ));
};

export interface CardProps {
  name?: string;
  image: string;
  altText: string;
  description: string;
  button: ButtonProps;
}

interface ButtonProps {
  href: string;
  text: string;
}

export default CardComponent;
