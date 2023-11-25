import { useState } from "react";

import { Button, Card, Container, Form } from "react-bootstrap";
import { handleForget } from "../services/Auth";

function Forget() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const ForgetUser = async () => {
    const payload = { email };

    handleForget(payload).then((data) => {
      if (data.error) {
        setError(data.error);
        setSuccessMsg("");
      } else {
        setError("");
        setSuccessMsg(data.message);
        localStorage.setItem("token", data.token);
      }
    });
  };

  return (

    
<div>
<ForgetForm email={email} setEmail={setEmail} ForgetUser={ForgetUser} />

{error ? <div className="error">{error}</div> : ""}
{successMsg ? <div className="success">{successMsg}</div> : ""}

</div>
  );
}

function ForgetForm({ email, setEmail, ForgetUser }) {
  return (
    <Container>
      <Card style={{ width: "25rem" }}>
        <Card.Img
          variant="top"
          src="https://logopond.com/logos/f4174059310a70e582455b0cd0175e18.png"
        />
        <Card.Body>
          <Card.Title>Forget Password</Card.Title>
          <Card.Text>Enter your Email to recover your account</Card.Text>
        </Card.Body>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="@mail.com "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Button onClick={() => ForgetUser()}>send mail</Button>
        <Card.Body>
          <Card.Link href=" /">Login </Card.Link>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Forget;
