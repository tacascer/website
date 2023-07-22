import Header from "@/components/Header";
import Section from "@/components/Section";
import BookCards from "./BookCards";

async function getBooks() {
  const res = await fetch("https://www.tacascer.dev/book/api");

  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  return res.json();
}
const Book = async () => {
  const books = await getBooks();

  return (
    <Section id="book">
      <Header>Books I &#x1F49E;</Header>
      <BookCards books={toBooks(books)} />
    </Section>
  );
};

function toBooks(books: any) {
  return books.data.items.map((book: any) => {
    return {
      id: book.id,
      title: book.volumeInfo.title,
      author: toAuthor(book.volumeInfo.authors),
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
      infoLink: book.volumeInfo.infoLink,
    };
  });
}

function toAuthor(authors: string[]) {
  return authors.join(", ");
}

export default Book;
