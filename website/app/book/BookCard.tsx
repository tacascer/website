"use client";

import Image from "next/image";
import { Card } from "react-bootstrap";

export type BookCardProps = {
  title: string;
  author: string;
  description: string;
  image: string;
};
export default function BookCard({
  title,
  author,
  description,
  image,
}: BookCardProps) {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={image}
        as={Image}
        height={195}
        width={128}
        style={{
          objectFit: "contain",
        }}
      ></Card.Img>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-body-secondary">
          {author}
        </Card.Subtitle>
        <Card.Text className="">{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
