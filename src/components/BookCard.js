import { Card } from "react-bootstrap";
import "./PostCard.css";
import serverUrl from "../serverUrl";

const BookCard = ({ book }) => {
  return (
    <Card className="d-flex justify-content-center text-center" border="0" style={{ width: "28rem", height: "fit-content", opacity: "0.8", backgroundColor: "#fdf5e9" }}>
      <a href={book.link} target="_blank" className="card-links">
        <Card.Img style={{ height: "150px", width: "150px", alignSelf: "center" }} variant="top" src={`${serverUrl}/books/${book.photo}`} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>
            By {book.author}
            <br />
            Click to purchase
          </Card.Text>
        </Card.Body>
      </a>
    </Card>
  );
};

export default BookCard;
