"use client";
import { Card } from "components/bootstrap";
import { Tech } from "@/app/Tech";
import Image from "next/image";

const logoWidth = 200;
const logoHeight = 200;

const TechCard = ({ name, image, altText, description }: Tech) => {
  return (
    <Card className="border-0 gap-3">
      <Card.Img
        variant="top"
        src={image}
        alt={altText}
        width={logoWidth}
        height={logoHeight}
        as={Image}
        quality={100}
        className="align-self-center rounded-bottom-5 border-bottom border-primary-subtle border-5"
        style={{
          // Hard coding dimensions here because Card component doesn't respect className
          width: `${logoWidth}px`,
          height: `${logoHeight}px`,
        }}
      ></Card.Img>
      <Card.Body className="bg-secondary rounded-5 text-center">
        <Card.Title as="h3">{name}</Card.Title>
        <div className="mx-auto d-none d-md-block col-lg-8">
          {cardTextFromDescription(description)}
        </div>
      </Card.Body>
    </Card>
  );
};

const cardTextFromDescription = (description: string) => {
  // Split description into sentences and map each sentence to a Card.Text component. A sentence is defined as a substring of description that ends with a period and is followed by a space
  return description.split(/(?<=\.\s)/).map((sentence, index) => {
    return <Card.Text key={index}>{sentence}</Card.Text>;
  });
};

export default TechCard;
