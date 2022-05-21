import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./PostCard.css";

const PostCard = ({ item }) => {
  // console.log(item);
  return (
    <div id="post-card">
      <div id="typeTag" className={item.fields.type}>
        {item.fields.type}
      </div>
      <Link to={`/post/${item.sys.id}`} className="card-links">
        <Card style={{ width: "22rem", height: "500px" }}>
          <Card.Img style={{ height: "300px" }} variant="top" src={item.fields.heroimage.fields.file.url} />
          <Card.Body>
            <Card.Title>{item.fields.headline}</Card.Title>
            <Card.Text>{item.fields.slug}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default PostCard;
