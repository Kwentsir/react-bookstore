import React from 'react';

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
