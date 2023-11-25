import { Col, Container, Row } from "react-bootstrap";
import { Topbar } from "../url/Topbar";
import { Comp1 } from "./Comp1";
import { Comp2 } from "./Comp2";

export function Home() {
  return (
    <>
      <Container style={{ maxWidth: 1080, flexFlow: "row" }}>
        <Topbar></Topbar>
        <Row>
          <Col>
            <Comp1 />
          </Col>
          <Col>
            {" "}
            <Comp2 />
          </Col>
        </Row>
        <div className="homecomp"></div>
      </Container>
    </>
  );
}
