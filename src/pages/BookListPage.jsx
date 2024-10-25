import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook } from '../redux/actions/bookActions';
import { Button, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BookListPage = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  return (
    <div className="container text-center mt-5 p-4 rounded bg-info">
      <h1>
        <span style={{ color: 'red' }}>Book</span> List
      </h1>
      <Link to="/add">
        <Button variant="success" className="mb-3">
          Add New Book
        </Button>
      </Link>

      {books.length > 0 ? (
        <ListGroup>
          {books.map((book) => (
            <ListGroup.Item
              key={book.id}
              className="d-flex justify-content-between align-items-center bg-light"
            >
              <div>
                <strong>{book.title}</strong> by {book.author}
              </div>
              <div>
                <Link to={`/edit/${book.id}`}>
                  <Button variant="warning" className="me-2">
                    Edit
                  </Button>
                </Link>
                <Button
                  variant="danger"
                  onClick={() => dispatch(deleteBook(book.id))}
                >
                  Delete
                </Button>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      ) : (
        <p className="mt-3">No books available. Please add a new book.</p>
      )}
    </div>
  );
};

export default BookListPage;
