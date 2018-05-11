import { Form, Button, FormGroup, Label, Input, FormText } from "reactstrap";

export default class FormCustom extends React.Component {
  submit = e => {
    e.preventDefault();
    setTimeout(() => alert("Se envió exitosamente tu mensaje"), 1500);
  };
  render() {
    return (
      <Form onSubmit={this.submit}>
        <FormGroup>
          <Label for="nombreInput">Nombre</Label>
          <Input type="text" name="nombre" id="nombreInput" required />
        </FormGroup>
        <FormGroup>
          <Label for="emailInput">Correo</Label>
          <Input type="email" name="email" id="emailInput" required />
        </FormGroup>
        <FormGroup>
          <Label for="ciudadInput">Ciudad</Label>
          <Input type="text" name="ciudad" id="ciudadInput" required />
        </FormGroup>
        <FormGroup>
          <Label for="telefonoInput">Teléfono</Label>
          <Input type="tel" name="telefono" id="telefonoInput" required />
        </FormGroup>
        <FormGroup>
          <Label for="mensajeInput">Mensaje</Label>
          <Input type="textarea" name="mensaje" label="mensajeInput" required />
        </FormGroup>
        <Button>Enviar</Button>
      </Form>
    );
  }
}
