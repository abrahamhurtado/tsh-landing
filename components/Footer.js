import Container from "./Container";
import { Row, Col } from "reactstrap";
export default () => (
  <div style={{ background: "#333" }}>
    <Row>
      <Col md="12">
        <Container
          style={{ color: "#fff", padding: 0 }}
          render={() => (
            <p style={{ textAlign: "center", margin: 0 }}>Sandía Dev. 2018</p>
          )}
        />
      </Col>
    </Row>
  </div>
);
