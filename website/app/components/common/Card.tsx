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
        <Card.Title as="h3" className="text-center">
          {name}
        </Card.Title>
        <div className="mx-auto d-none d-md-block col-lg-7">
          {cardTextFromDescription(description)}
          <Button
            variant="outline-primary"
            href={button.href}
            target="_blank"
            className="rounded-pill shadow d-grid col-5 mx-auto stretched-link"
          >
            {button.text}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

const cardTextFromDescription = (description: string) => {
  // Split description into sentences and map each sentence to a Card.Text component. A sentence is defined as a substring of description that ends with a period and is followed by a space and a capital letter.
  // The regex (?<=\.\s) is a positive lookbehind that matches a period followed by a space, but does not include the period and space in the match.
  // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions#positive_lookbehind_assertions
  return description
    .trim()
    .split("\n")
    .map((sentence, index) => <Card.Text key={index}>{sentence}</Card.Text>);
  // The above code is equivalent to:

  // return description.split(/(?<=\.\s)/).map((sentence, index) => {
  //   return <Card.Text key={index}>{sentence}</Card.Text>;
  // });
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
