import { Card } from "react-bootstrap";
// import { Link } from "react-router-dom";
import "./PostCard.css";

const BookCard = ({ book }) => {
  return (
    <Card className="d-flex justify-content-center text-center" border="0" style={{ width: "35rem", height: "fit-content", opacity: "0.8", backgroundColor: "#fdf5e9" }}>
      {/* <Link to={`/book/${book.sys.id}`} className="card-links"> */}
      <Card.Img style={{ height: "150px", width: "150px", alignSelf: "center" }} variant="top" src={book.fields.photo.fields.file.url} />
      <Card.Body>
        <Card.Title>{book.fields.title}</Card.Title>
        <Card.Text>
          By {book.fields.author}
          <a href={book.fields.link} target="_blank">
            Link to purchase
          </a>
        </Card.Text>
      </Card.Body>
      {/* </Link> */}
    </Card>
  );
};

export default BookCard;
