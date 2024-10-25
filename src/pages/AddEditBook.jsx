import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, editBook } from '../redux/actions/bookActions';
import { useNavigate, useParams } from 'react-router-dom';

const AddEditBook = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const books = useSelector((state) => state.books.books);
  
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    if (id) {
      const currentBook = books.find((book) => book.id === parseInt(id));
      if (currentBook) {
        setTitle(currentBook.title);
        setAuthor(currentBook.author);
      } else {
        // Redirect if the book is not found
        navigate('/');
      }
    }
  }, [id, books, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookData = { id: id ? parseInt(id) : Date.now(), title, author };
    dispatch(id ? editBook(bookData) : addBook(bookData));
    navigate('/');
  };

  return (

    
    <div className='text-center bg-warning rounded mt-5 p-4'>
        <h1>Add Book</h1>
        <Form onSubmit={handleSubmit} className="text-center">
      <Form.Group controlId="formTitle">
        <Form.Control
        className='bg-light mb-2'
          type="text"
          placeholder="Enter book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="formAuthor">
        <Form.Control
        className='bg-light'
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
    </div>
  );
};

export default AddEditBook;
