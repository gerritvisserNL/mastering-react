import { books } from "../data/data";
import BookList from "./components/BookList";

export default function Home() {
  return (
    <main>
      <h1>Book List</h1>
      <BookList books={books} />
    </main>
  );
}
