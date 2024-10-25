import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import store from './redux/store';
import AddEditBook from './pages/AddEditBook'; // Assuming you still want the add book form
import EditBookPage from './pages/EditBookPage'; // Import the new edit book page
import BookListPage from './pages/BookListPage';
import { Container, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar bg="info" variant="dark" expand="lg" className="w-100 " >
          <Container fluid>
          <Navbar.Brand as={Link} to="/"><span style={{color:"black",fontSize:"25px",fontWeight:"bolder"}}>Book Management</span></Navbar.Brand>
          </Container>
        </Navbar>
        <Container 
          className="d-flex justify-content-center align-items-center" 
          style={{ minHeight: '100vh', width: '100vw' }} 
        >
          <div style={{ width: '100%', maxWidth: '600px',color:"black" }}>
            <Routes>
              <Route path="/" element={<BookListPage />} />
              <Route path="/add" element={<AddEditBook />} />
              <Route path="/edit/:id" element={<EditBookPage />} /> {/* New edit route */}
            </Routes>
          </div>
        </Container>
      </Router>
    </Provider>
  );
};

export default App;
