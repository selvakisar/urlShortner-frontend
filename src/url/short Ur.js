import {  useState } from "react";
import { ApiUrl } from "../services/Url";
import { Base } from "../components/base";
import { Button, Card, CardBody, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router";

export default function ShortUrlForm() {
  const [origUrl, setOrigUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [data,setdata]=useState();


 
  const handleInputChange = (e) => {
    setOrigUrl(e.target.value);
  };

  const shortenUrl = async () => {
    try {
      const response = await fetch(`${ApiUrl}/short`, {
        method: 'POST',
        body: JSON.stringify({ origUrl: origUrl }),
        headers: {
          'X-Auth-Token': localStorage.getItem("token"), 
          'Content-Type': 'application/json',
        },
      });

      if (!response) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setShortUrl(data);
      console.log(data.shortUrl);
      alert(data.shortUrl);
      window.location.reload(true);
    } catch (error) {
      console.error('Error shortening URL:', error.message);
      // Handle error
    }
  };



const navigate =useNavigate()



 

  return (
    <div>
      <Base>
        <Container  style={{ width: "55rem" ,backgroundColor:"darkolivegreen"}}>
          <Card style={{ width: "25rem" }}>
            <Card.Img
              variant="top"
              src="https://logopond.com/logos/f4174059310a70e582455b0cd0175e18.png"
            />
            <Card.Body>
              <Card.Title>Enter your url </Card.Title>
              <Card.Text>
                Click "Nano" button to resize your Url
              </Card.Text>
            </Card.Body>
               <Form.Group>
            <Form.Label>Url</Form.Label>
            <Form.Control
              type="text"
              placeholder="Url "
              value={origUrl}
              onChange={handleInputChange} 
              style={{backgroundColor:"darkseagreen"}}
            />
         
          </Form.Group>
          <div  style={{paddingBottom:"5px"}} >
          <Button variant="success" onClick={()=>shortenUrl()}>Nano</Button>
        
          </div>
          <Button variant="success"  onClick={()=>navigate('/all')}>All urls</Button>
         
          </Card>
       <CardBody>

       </CardBody>
        </Container>
      </Base>
    </div>
  );
}
