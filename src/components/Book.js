import React from "react";
import PropTypes from 'prop-types';

const Book = ({title, author}) => (
    <>
    <h3>{title}</h3>
    <p>{author}</p>
    <button type="button">Remove</button>
    </>
);
export default Book;

Book.PropTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
};