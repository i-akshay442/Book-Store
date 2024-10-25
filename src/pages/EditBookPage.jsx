import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { editBook } from '../redux/actions/bookActions';
import { useNavigate, useParams } from 'react-router-dom';

const EditBookPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const books = useSelector((state) => state.books.books);
  
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    const currentBook = books.find((book) => book.id === parseInt(id));
    if (currentBook) {
      setTitle(currentBook.title);
      setAuthor(currentBook.author);
    } else {
      navigate('/');
    }
  }, [id, books, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookData = { id: parseInt(id), title, author };
    dispatch(editBook(bookData));
    navigate('/');
  };

  return (
    <div className="text-center bg-danger rounded  p-5">

      <h1>Edit Book</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTitle">
            
          <Form.Control
          className='bg-white mb-2'
            type="text"
            placeholder="Enter book title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formAuthor">
          <Form.Control
          className='bg-white'
            type="text"
            placeholder="Enter author name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Save Changes
        </Button>
      </Form>
    </div>
  );
};

export default EditBookPage;
