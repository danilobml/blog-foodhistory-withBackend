import { Card } from "react-bootstrap";

const PostCard = ({ item }) => {
  console.log(item);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={item.fields.heroimage.fields.file.url} />
      <Card.Body>
        <Card.Title>{item.fields.headline}</Card.Title>
        <Card.Text>{item.fields.slug}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PostCard;
