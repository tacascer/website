import Book from "./book/Book";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Tech from "./components/tech/Tech";

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
