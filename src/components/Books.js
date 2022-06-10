import React from "react";
import Book from "./Book";
import AddBook from "./AddBook";
import { v4 as uuidv4 } from "uuid";

const Books = () => {
  const books = [
    {
      title: "Clean Code: A Handbook of Agile Software Craftsmanship",
      author: "Robert C. Martin",
      id: uuidv4(),
    },
  ];
  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} />
      ))}
      <AddBook />
    </div>
  );
};

export default Books;
