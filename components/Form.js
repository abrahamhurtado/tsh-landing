import { Form, Button, FormGroup, Label, Input, FormText } from "reactstrap";

export default () => (
  <Form>
    <FormGroup>
      <Label for="nombreInput">Nombre</Label>
      <Input type="text" name="nombre" id="nombreInput" />
    </FormGroup>
    <FormGroup>
      <Label for="emailInput">Correo</Label>
      <Input type="email" name="email" id="emailInput" />
    </FormGroup>
    <FormGroup>
      <Label for="ciudadInput">Ciudad</Label>
      <Input type="text" name="ciudad" id="ciudadInput" />
    </FormGroup>
    <FormGroup>
      <Label for="telefonoInput">Teléfono</Label>
      <Input type="tel" name="telefono" id="telefonoInput" />
    </FormGroup>
    <FormGroup>
      <Label for="mensajeInput">Mensaje</Label>
      <Input type="textarea" name="mensaje" label="mensajeInput" />
    </FormGroup>
    <Button>Enviar</Button>
  </Form>
);
