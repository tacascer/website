"use client";

import Image from "next/image";
import { Button, Card } from "react-bootstrap";

export type BookCardProps = {
  title: string;
  author: string;
  description: string;
  image: string;
  infoLink: string;
};
export default function BookCard({
  title,
  author,
  description,
  image,
  infoLink,
}: BookCardProps) {
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={image}
        as={Image}
        height={195}
        width={128}
        style={{
          objectFit: "contain",
        }}
        quality={100}
        className="mt-3"
      ></Card.Img>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-body-secondary">
          {author}
        </Card.Subtitle>
        <Card.Text className="">{description}</Card.Text>
        <Button
          variant="outline-primary rounded-pill d-grid col-lg-10 mx-auto"
          href={infoLink}
          target="_blank"
        >
          Check it out on Google Books
        </Button>
      </Card.Body>
    </Card>
  );
}
