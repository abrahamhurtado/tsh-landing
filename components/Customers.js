import { Col, Row, Card, CardDeck, CardImg } from "reactstrap";

import Container from "./Container";
import BackgroundImage from "./BackgroundImage";

const customers = [
  {
    src: "../static/logos/cfe.png",
    name: "CFE",
    cover: false
  },
  {
    src: "../static/logos/galerias.svg",
    name: "Galerías Mall Sonora",
    cover: false
  },
  {
    src: "../static/logos/metrocentro.png",
    name: "Metrocentro Hermosillo",
    cover: true
  },
  {
    src: "../static/logos/patio.png",
    name: "Patio Hermosillo",
    cover: false
  },
  {
    src: "../static/logos/unison.png",
    name: "Universidad de Sonora",
    cover: false
  }
];

export default () => (
  <Container
    id="customers"
    style={{ paddingTop: 25, paddingBottom: 25 }}
    render={() => (
      <React.Fragment>
        <Row>
          <Col md="12">
            <h2 className="section-header">Nuestros clientes</h2>
            <p className="section-paragraph">
              Ellos confían en TSH Multiservicios
            </p>
            <style global jsx>{`
              .section-header {
                text-align: center;
              }
              .section-paragraph {
                text-align: center;
              }
            `}</style>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Container
              render={() => (
                <CardDeck>
                  {customers.map((customer, index) => (
                    <Card style={{ justifyContent: "center" }}>
                      <CardImg top width="100%" src={customer.src} />
                    </Card>
                  ))}
                </CardDeck>
              )}
            />
          </Col>
        </Row>
      </React.Fragment>
    )}
  />
);
