import React from "react";
import { Jumbotron, Button } from "reactstrap";
import Container from "./Container";

export default props => (
  <div>
    <Jumbotron>
      <Container
        render={() => (
          <React.Fragment>
            <h1 className="display-3">TSH Multiservicios</h1>
            <p className="lead">Hola mens</p>
          </React.Fragment>
        )}
      />
    </Jumbotron>
  </div>
);
