import Book from "./book/Book";
import About from "./about/About";
import Experience from "./experience/Experience";
import Tech from "./tech/Tech";

export default function Home() {
  return (
    <>
      <About></About>
      <Tech></Tech>
      <Experience></Experience>
      <Book></Book>
    </>
  );
}
