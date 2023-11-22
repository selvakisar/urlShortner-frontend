import { useState } from "react";
import { useNavigate } from "react-router";
import { handleSignup } from "../services/Auth";
import { Card, Button, Container, Form } from "react-bootstrap";

import "../styles/auth.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const navigate = useNavigate();

  //   const navigate=useNavigate("")

  const SignupUser = async () => {
    const payload = { name, email, password };

    handleSignup(payload).then((data) => {
      if (data.error) {
        setError(data.error);
        setSuccessMsg("");
      } else {
        setError("");
        setSuccessMsg(data.message);
        localStorage.setItem("token", data.token);
        navigate("/home");
      }
    });
  };

  return (
    <div className="justify-center p-3">
      <SignupForm
        name={name}
        setName={setName}
        setEmail={setEmail}
        email={email}
        setPassword={setPassword}
        password={password}
        SignupUser={SignupUser}
      />
      {error ? <div className="error">{error}</div> : ""}
      {successMsg ? <div className="success">{successMsg}</div> : ""}
    </div>
  );
}

function SignupForm({
  name,
  setName,
  password,
  setPassword,
  email,
  setEmail,
  SignupUser,
  error,
  successMsg,
}) {
  return (
    <div>
      <Container>
        <Card style={{ width: "25rem" }}>
          <Card.Img
            variant="top"
            src="https://logopond.com/logos/f4174059310a70e582455b0cd0175e18.png"
          />
          <Card.Body>
            <Card.Title>Register to explore</Card.Title>
            <Card.Text>
              nanoUrl is the website to shrink the long Url of the website into
              small to share
            </Card.Text>
          </Card.Body>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="name "
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="@mail.com "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>password</Form.Label>
            <Form.Control
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button onClick={() => SignupUser()}>Signup</Button>
          <Card.Body>
            <Card.Link href="/">sign in </Card.Link>
            <Card.Link href="/forget">forget password </Card.Link>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Signup;
