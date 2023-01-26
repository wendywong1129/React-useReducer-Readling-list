import {
  createContext,
  useEffect,
  // useState,
  useReducer,
} from "react";
// import { v4 as uuidv4 } from "uuid";
import { BookReducer } from "../reducers/BookReducer";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  // const [books, setBooks] = useState([
  //   { title: "Harry Potter", author: "J. K. Rowling", id: 1 },
  //   { title: "The Little Prince", author: "Antoine de Saint-Exupéry", id: 2 },
  //   { title: "The Count of Monte Cristo", author: "Alexandre Dumas", id: 3 },
  // ]);

  // const addBook = (title, author) => {
  //   setBooks([...books, { title, author, id: uuidv4() }]);
  // };

  // const removeBook = (id) => {
  //   setBooks(books.filter((book) => book.id !== id));
  // };
  const [books, dispatch] = useReducer(BookReducer, [], () => {
    const result = localStorage.getItem("books");

    return result.length > 2
      ? JSON.parse(result)
      : [
          { title: "Harry Potter", author: "J. K. Rowling", id: 1 },
          {
            title: "The Little Prince",
            author: "Antoine de Saint-Exupéry",
            id: 2,
          },
          {
            title: "The Count of Monte Cristo",
            author: "Alexandre Dumas",
            id: 3,
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
