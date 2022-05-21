import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./PostCard.css";

const AuthorCard = ({ author }) => {
  // console.log(item);
  return (
    <Card border="0" style={{ width: "30rem", height: "200px" }}>
      <Link to={`/author/${author.sys.id}`} className="card-links">
        <Card.Img style={{ height: "100px", width: "100px" }} variant="top" src={author.fields.authorpic.fields.file.url} />
        <Card.Body>
          <Card.Title>{author.fields.name}</Card.Title>
          <Card.Text>{author.fields.slug}</Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default AuthorCard;
