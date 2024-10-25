import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook } from '../redux/actions/bookActions';

const BookList = ({ setCurrentBook }) => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <strong>{book.title}</strong> by {book.author}
          <button onClick={() => setCurrentBook(book)}>Edit</button>
          <button onClick={() => dispatch(deleteBook(book.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default BookList;
