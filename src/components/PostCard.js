import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./PostCard.css";

const PostCard = ({ item }) => {
  console.log(item);
  return (
    <Link to={`/post/${item.sys.id}`} className="card-links">
      <Card style={{ width: "22rem", height: "500px" }}>
        <Card.Img style={{ height: "300px" }} variant="top" src={item.fields.heroimage.fields.file.url} />
        <Card.Body>
          <Card.Title>{item.fields.headline}</Card.Title>
          <Card.Text>{item.fields.slug}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default PostCard;
