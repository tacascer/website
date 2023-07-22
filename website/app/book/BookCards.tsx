"use client";

import { Row, Col } from "react-bootstrap";
import BookCard from "./BookCard";
import { BookCardProps } from "./BookCard";

type Book = BookCardProps & {
  id: string;
};

export type BookCardsProps = {
  books: Book[];
};

export default function BookCards({ books }: BookCardsProps) {
  return (
    <Row xs={1} md={2} className="g-4 justify-content-center">
      {books.map((book: Book) => (
        <Col key={book.id}>
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            description={book.description}
            image={book.image}
            infoLink={book.infoLink}
          />
        </Col>
      ))}
    </Row>
  );
}
