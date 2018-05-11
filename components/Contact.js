import { Row, Col, Container, Card } from "reactstrap";
import Form from "./Form";
import Map from "./Map";
export default () => (
  <div
    style={{ background: "#f7f7f7", paddingTop: 25, paddingBottom: 25 }}
    id="contact"
  >
    <Container>
      <Row>
        <Col md="4">
          <h4>¡Contáctanos!</h4>
          <Form />
        </Col>
        <Col md="8">
          <h4>¡Visítanos!</h4>
          <p className="text-muted">
            Ubicación: Lauro Galvez #197 Col. Palo Verde, Hermosillo, Sonora
          </p>
          <p className="text-muted">Teléfonos: 2501633 y 6621888533</p>
          <Map />
        </Col>
      </Row>
    </Container>
  </div>
);
