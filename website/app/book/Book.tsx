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

const REVIEWS: {
  title: string;
  review: string;
}[] = [
  {
    title: "A Random Walk Down Wall Street",
    review:
      "The only investing book you'll ever need to read. Never again trust investment advice on TikTok.",
  },
  {
    title: "Sapiens",
    review:
      "At some point, Homo Sapiens went through the Cognitive Revolution. We then built the Internet and put cat videos on it.",
  },
  {
    title: "Atomic Habits",
    review:
      "Do I believe that humans can actually improve exponentially? No, but this book should motivate you to at least improve linearly.",
  },
  {
    title: "Factfulness",
    review:
      "The world is not as bad as we think it is. Also, a lot of problems arise not from cultural and geographic difference, but from wealth disparity #marxwasright",
  },
  {
    title: "Thinking, Fast and Slow",
    review:
      "Nobel laureate Daniel Kahneman will detail his research on the irrationality of the mind while also reading yours the entire time.",
  },
];
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
      description: getReview(book.volumeInfo.title),
      image: book.volumeInfo.imageLinks.thumbnail,
      infoLink: book.volumeInfo.infoLink,
    };
  });
}

function toAuthor(authors: string[]) {
  return authors.join(", ");
}

function getReview(title: string) {
  return REVIEWS.find((review) => review.title === title)?.review;
}

export default Book;
