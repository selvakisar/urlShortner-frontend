import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router';

export function Comp1() {
    const navigate=useNavigate()
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://res.cloudinary.com/cloudinary-marketing/images/c_fill,w_890/f_auto,q_auto/v1647045694/28_SEO_friendly_URLs/28_SEO_friendly_URLs-jpg?_i=AA" />
      <Card.Body>
        <Card.Title>View all Urls</Card.Title>
        <Card.Text>
        All the URL's has been shortened
        </Card.Text>
        <Button variant="outline-success"onClick={()=>navigate("/all")} >Let View</Button>
      </Card.Body>
    </Card>
  );
}

