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
      <Card.Body className="bg-secondary rounded-pill text-center">
        <Card.Title>{name}</Card.Title>
        <Card.Text className="col-md-8 mx-auto d-none d-md-block">
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default TechCard;
