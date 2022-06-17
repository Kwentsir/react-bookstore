import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import Book from './Book';
import AddBook from './AddBook';
import {getBooks} from '../redux/books/books';


const Books = () => {
  const {books} = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(getBooks());
  }, [dispatch]);

  const keys = Object.keys(books);
  return (
    <div>
      {keys.length > 0 &&
        keys.map((key) => (
          <Book
            key={key}
            title={books[key][0].title}
            author={books[key][0].author}
            id={key}
          />
        ))}
      <AddBook />
    </div>
  );
};

export default Books;
