import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export const Topbar=()=>{

    return(<div className=''>

    <Navbar expand="lg" className="bg-body-tertiary"    >
    
        <Navbar.Brand style ={{ width: "720px" }} href="#home">Nano URL</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse style ={{ width: "48rem" }} id="basic-navbar-nav">
          <Nav className="me-auto">

          <Button variant="outline-secondary" style={{marginBlock:"5px",marginLeft:"5px",marginRight:"5px"}}> <a  href="/home">Home</a></Button>

          <Button variant="outline-secondary" style={{marginBlock:"5px",marginLeft:"5px",marginRight:"5px"}}> <a href="/short">Short Url</a></Button>{' '}

          <Button variant="outline-danger" style={{marginBlock:"5px",marginLeft:"5px",marginRight:"5px"}}> <a href="/">Logout</a></Button>{' '}



          </Nav>
        </Navbar.Collapse>
    
    </Navbar>


    </div>
 
    )
}




// <div>
// <Base>
//   <Container>
//     <Card style={{ width: "23rem" }}>
//       <Card.Img
//         variant="top"
//         src="https://logopond.com/logos/f4174059310a70e582455b0cd0175e18.png"
//       />
//       <Card.Body>
//         <Card.Title>Enter your url </Card.Title>
//         <Card.Text>
//           Click "Nano" button to resize your Url
//         </Card.Text>
//       </Card.Body>
//          <Form.Group>
//       <Form.Label>Url</Form.Label>
//       <Form.Control
//         type="text"
//         placeholder="Url "
//         value={origUrl}
//         onChange={e.target.value} 
//       />
   
//     </Form.Group>
//     <Button onClick={()=>ShortUrl()}>Nano</Button>
//     <Button >all urls</Button>
//     {error ? <div className="error">{setError(error)}</div> : ""}
// {successMsg ? <div className="success">{setSuccessMsg(successMsg)}</div> : ""}
//     </Card>
 
//   </Container>
// </Base>
// </div>