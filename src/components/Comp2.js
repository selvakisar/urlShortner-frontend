import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router";

export function Comp2() {
  const navigate = useNavigate();
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://res.cloudinary.com/cloudinary-marketing/images/c_fill,w_890/f_auto,q_auto/v1647045694/28_SEO_friendly_URLs/28_SEO_friendly_URLs-jpg?_i=AA"
      />
      <Card.Body>
        <Card.Title>Lets go! </Card.Title>
        <Card.Text>Create Nano Url</Card.Text>
        <Button variant="outline-success" onClick={() => navigate("/short")}>
          Lets make Nano
        </Button>
      </Card.Body>
    </Card>
  );
}
