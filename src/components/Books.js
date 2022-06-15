import React from 'react';
import Book from './Book';
import AddBook from './AddBook';

const Books = () => {
  const books = useSelector((state) => state.books);
  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} id={book.id} />
      ))}
      <AddBook />
    </div>
  );
};

export default Books;
