import React, { Component } from "react";

import { Container } from "../components/Container";
import { CardForm } from "../components/Form";

class AddCardScreen extends Component {
  render() {
    return (
      <Container>
        <CardForm />
      </Container>
    );
  }
}

export default AddCardScreen;
