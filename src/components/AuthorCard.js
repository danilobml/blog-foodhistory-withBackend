import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./PostCard.css";
import serverUrl from "../serverUrl";

const AuthorCard = ({ author }) => {
  return (
    <Card border="0" style={{ width: "30rem", maxHeight: "200px" }} className="author-card">
      <Link to={`/author/${author.author_id}`} className="card-links">
        <Card.Img style={{ height: "100px", width: "100px" }} variant="top" src={`${serverUrl}/authors/${author.authorpic}`} />
        <Card.Body>
          <Card.Title>{author.name}</Card.Title>
          <Card.Text className="d-none d-sm-block">{author.slug}</Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default AuthorCard;
