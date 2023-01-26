import { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);

  return (
    <div className="navbar">
      <h1>MY READING LIST</h1>
      <p>Wait for reading: {books.length} books.</p>
    </div>
  );
};

export default Navbar;
