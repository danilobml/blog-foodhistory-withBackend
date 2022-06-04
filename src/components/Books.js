import { useEffect, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import client from "../contentful/client";
import BookCard from "./BookCard";
import "./Books.css";

function Books() {
  const [books, setBooks] = useState();

  useEffect(() => {
    client.getEntries({ content_type: "books" }).then((data) => setBooks(data));
  }, []);

  if (!books) {
    return null;
  }
  return (
    <Container className="books-container d-flex justify-content-center align-items-center text-center ms-5">
      <Row className="g-4">
        <h2>Recommended Readings:</h2>
        {books &&
          books.items.map((book, index) => (
            <Col key={index} className="m-4">
              <BookCard book={book} />
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default Books;
