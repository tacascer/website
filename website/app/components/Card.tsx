"use client";

import { Card, Button } from "react-bootstrap";
import Image from "next/image";

const LOGO_WIDTH = 200;
const LOGO_HEIGHT = 200;

const CardComponent = ({
  title,
  image: { image, altText, height = LOGO_HEIGHT, width = LOGO_WIDTH },
  description,
  button,
}: CardProps) => {
  return (
    <Card className={`border-0 gap-2 pt-2`}>
      <Card.Img
        variant="top"
        src={image}
        alt={altText}
        width={width}
        height={height}
        as={Image}
        quality={100}
        className="align-self-center shadow rounded-5 p-3 bg-light"
        fill={false}
        style={{
          // Hard coding dimensions here because Card component doesn't respect className
          width: `${width}px`,
          height: `${height}px`,
          objectFit: "contain",
        }}
      ></Card.Img>
      <Card.Body>
        <Card.Title as="h2" className="text-center text-primary ">
          {title}
        </Card.Title>
        {cardTextFromDescription(description)}
        <Button
          variant="outline-primary"
          href={button.href}
          target="_blank"
          className="rounded-pill d-grid col-md-4 mx-auto stretched-link"
        >
          {button.text}
        </Button>
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
export type ImageMetadata = {
  image: string;
  altText: string;
  height?: number;
  width?: number;
};

export type CardProps = {
  title?: string;
  description: string;
  image: ImageMetadata;
  button: ButtonProps;
};

type ButtonProps = {
  href: string;
  text: string;
};

export default CardComponent;
