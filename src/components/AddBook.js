import React, {useState} from 'react';
import { useDispatch } from 'react-redux/es/exports';
import {v4 as uuidv4} from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => (
  <form>
    <input
      style={{
        marginRight: '1rem',
      }}
      type="text"
      placeholder="Type Book Title Here"
    />

    <button type="submit">Add Book</button>
  </form>
);

export default AddBook;
