import { Card } from "react-bootstrap";
import "./PostCard.css";

const BookCard = ({ book }) => {
  return (
    <Card className="d-flex justify-content-center text-center" border="0" style={{ width: "28rem", height: "fit-content", opacity: "0.8", backgroundColor: "#fdf5e9" }}>
      <a href={book.fields.link} target="_blank" className="card-links">
        <Card.Img style={{ height: "150px", width: "150px", alignSelf: "center" }} variant="top" src={book.fields.photo.fields.file.url} />
        <Card.Body>
          <Card.Title>{book.fields.title}</Card.Title>
          <Card.Text>
            By {book.fields.author}
            <br />
            Click to purchase
          </Card.Text>
        </Card.Body>
      </a>
    </Card>
  );
};

export default BookCard;
