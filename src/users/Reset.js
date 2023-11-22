import { useNavigate } from "react-router";
import { handleReset } from "../services/Auth";
import { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";

function Reset() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const navigate = useNavigate();

  const resetPassword = async () => {
    const payload = { password };
    handleReset(payload).then((data) => {
      if (data.error) {
        setError(data.error);
        setSuccessMsg("");
      } else {
        setError("");
        setSuccessMsg(data.message);
        localStorage.setItem("token", data.token);
        navigate("/");
      }
    });
  };

  return (
    <div>
      <ResetForm
        password={password}
        setPassword={setPassword}
        resetPassword={resetPassword}
      />

      {error ? <div className="error">{error}</div> : ""}
      {successMsg ? <div className="success">{successMsg}</div> : ""}
    </div>
  );
}

function ResetForm({ password, setPassword, resetPassword }) {
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
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button onClick={() => resetPassword()}>Login</Button>
        <Card.Body>
          <Card.Link href=" /">Login </Card.Link>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Reset;
