import React from "react";
import Container from "./Container";
import SVGContainer from "./SVGContainer";
import { Col, Row, Card, CardTitle, CardText } from "reactstrap";
import Mision from "../svgs/mision.svg";
import Vision from "../svgs/vision.svg";
import Equipo from "../svgs/team.svg";

const SVGContainerStyles = {
  maxWidth: 150,
  margin: "0 auto"
};

export default () => (
  <Container
    style={{ paddingTop: 25, paddingBottom: 25 }}
    id="about-us"
    render={() => (
      <React.Fragment>
        <Row>
          <Col md="4">
            <SVGContainer style={SVGContainerStyles}>
              <Equipo />
            </SVGContainer>
          </Col>
          <Col md="8">
            <h2>¿Quienes somos?</h2>
            <p>
              TSH Multiservicios es una empresa de giro industrial, dedicada a
              las obras electromecánicas: la elaboración de cableado aéreo o
              subterráneo para múltiples clientes.
            </p>
            <p>
              Se fundó en 1999 como un taller de soldadura y herrería,
              identificado su calidad de servicio hasta la fecha.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={{ size: 4, order: 2 }}>
            <SVGContainer style={SVGContainerStyles}>
              <Mision />
            </SVGContainer>
          </Col>
          <Col md="8">
            <h4>Misión</h4>
            <p>
              Ser una empresa competitiva con propuestas innovadoras en el
              sector de obras electromecánicas que incrementen la rentabilidad
              de forma transparente.
            </p>
            <p>
              Otorgar a nuestros clientes satisfacción de forma profesional,
              confiable y eficiente mediante un servicio de construcción
              completo, preciso y meticuloso, comprometidos con la capacitación
              y motivación constante de nuestro personal.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md="4">
            <SVGContainer style={SVGContainerStyles}>
              <Vision />
            </SVGContainer>
          </Col>
          <Col md="8">
            <h4>Visión</h4>
            <p>
              Consolidarnos como una reconocida empresa en el estado de Sonora
              regida por altos estándares de calidad en la construcción de obra
              eléctrica y electromecánica.
            </p>
          </Col>
        </Row>
      </React.Fragment>
    )}
  />
);
