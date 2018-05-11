import { Row, Col } from "reactstrap";

import SVGContainer from "./SVGContainer";
import Electricidad from "../svgs/electricidad.svg";
import Negocios from "../svgs/negocios.svg";
import Quality from "../svgs/quality.svg";

import Container from "./Container";
export default () => (
  <div style={{ backgroundColor: "#f7f7f7" }}>
    <Container
      id="services"
      style={{ paddingTop: 25, paddingBottom: 25 }}
      render={() => (
        <React.Fragment>
          <Row>
            <Col md="12">
              <h2 className="section-header">Nuestros servicios</h2>
              <style global jsx>{`
                .section-header {
                  text-align: center;
                }
              `}</style>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <SVGContainer style={{ maxWidth: 150, margin: "0 auto" }}>
                <Electricidad />
              </SVGContainer>
              <h4>Proyectos de electricidad</h4>
              <p>
                Líneas y redes de distribución aéreas y subterráneas de potencia
                por todo el Estado de Sonora.
              </p>
            </Col>
            <Col md="4">
              <SVGContainer style={{ maxWidth: 150, margin: "0 auto" }}>
                <Negocios />
              </SVGContainer>
              <h4>Especializados en industria</h4>
              <p>
                Experiencia en proyectos enfocados en Unidades Gubernamentales,
                Centros comerciales, Instalaciones industriales.
              </p>
            </Col>
            <Col md="4">
              <SVGContainer style={{ maxWidth: 150, margin: "0 auto" }}>
                <Quality />
              </SVGContainer>
              <h4>Experiencia y calidad</h4>
              <p>
                Personal con más de 30 años de experiencia, 18 años establecidos
                como empresa con clientes importantes.
              </p>
            </Col>
          </Row>
        </React.Fragment>
      )}
    />
  </div>
);
