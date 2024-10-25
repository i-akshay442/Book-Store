import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addBook, editBook } from '../redux/actions/bookActions';
import { useNavigate, useParams } from 'react-router-dom';

const BookForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    if (id) {
      // Find and set current book details
      // Assuming you fetch the current book using id
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookData = { id: id || Date.now(), title, author };
    id ? dispatch(editBook(bookData)) : dispatch(addBook(bookData));
    navigate('/');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formTitle">
        <Form.Label>Book Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="formAuthor">
        <Form.Label>Author</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter author name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-3">
        {id ? 'Edit Book' : 'Add Book'}
      </Button>
    </Form>
  );
};

export default BookForm;
