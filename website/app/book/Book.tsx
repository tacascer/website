import Header from "@/components/Header";
import Section from "@/components/Section";
import BookCards from "./BookCards";

type Response = {
  data: {
    items: BookDto[];
  };
};

type BookDto = {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    description: string;
    imageLinks: {
      thumbnail: string;
    };
    infoLink: string;
  };
};

async function getBooks(): Promise<Response | string> {
  const res = await fetch("https://www.tacascer.dev/book/api");

  if (!res.ok) {
    return res.statusText;
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

  let bookCards;
  if (typeof books === "string") {
    console.error(books);
    bookCards = (
      <p className="text-center col-md-6 mx-auto text-danger border-danger border-bottom p-3">
        Something went wrong while fetching books.
      </p>
    );
  } else {
    bookCards = <BookCards books={toBooks(books.data.items)} />;
  }

  return (
    <Section id="book">
      <Header>Books I &#x1F49E;</Header>
      {bookCards}
    </Section>
  );
};

function toBooks(books: BookDto[]) {
  return books.map((book: BookDto) => {
    return {
      id: book.id,
      title: book.volumeInfo.title,
      author: toAuthor(book.volumeInfo.authors),
      description:
        getReview(book.volumeInfo.title) || book.volumeInfo.description,
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
