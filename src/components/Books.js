import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BookCard from "./BookCard";
import "./Books.css";
import serverUrl from "../serverUrl";
const axios = require("axios").default;

function Books() {
  const [books, setBooks] = useState();

  useEffect(() => {
    axios
      .get(`${serverUrl}/api/books`)
      .then((data) => setBooks(data.data))
      .catch((error) => console.log(error));
  }, []);

  console.log(books);

  if (!books) {
    return null;
  }
  return (
    <Container className="books-container d-flex min-vh-100 justify-content-center align-items-center text-center justify-self-center">
      <Row className="g-4">
        <h2>Recommended Readings:</h2>
        {books &&
          books.map((book, index) => (
            <Col key={index} className="d-flex justify-content-center m-4">
              <BookCard book={book} />
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default Books;
