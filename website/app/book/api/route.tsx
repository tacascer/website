import { NextResponse } from "next/server";

export async function GET() {
  const self = process.env.GOOGLE_BOOKS_USER_ID;
  const apiKey = process.env.GOOGLE_API_KEY;
  const favoriteShelf = 0;
  if (!self) {
    return NextResponse.json(
      { error: "Missing google books user id" },
      { status: 500 }
    );
  }
  if (!apiKey) {
    return NextResponse.json({ error: "Missing api key" }, { status: 500 });
  }

  const favorites = await fetch(
    `https://www.googleapis.com/books/v1/users/${self}/bookshelves/${favoriteShelf}/volumes/?key=${apiKey}`,
    {
      headers: {
        "Content-Type": "application/json",
        Referer: "www.tacascer.dev",
      },
    }
  );

  if (!favorites.ok) {
    console.log(favorites);
    return NextResponse.json(
      { error: "Error fetching favorites" },
      { status: 500 }
    );
  }

  const data: Response = await favorites.json();
  return NextResponse.json({ data });
}
