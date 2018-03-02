import React, { Component } from "react";
import { Keyboard, KeyboardAvoidingView } from "react-native";
import { connect } from "react-redux";

import { Container } from "../components/Container";
import { Form } from "../components/Form";
import { addDeck } from "../actions";
import { title } from "change-case";

class NewDeckScreen extends Component {
  state = {
    title: ""
  };
  handleSubmit = () => {
    const { title } = this.state;
    this.props.addDeck(title);
    this.setState({ title: "" });
    Keyboard.dismiss();
    // this.props.navigation.navigate("Decks");
    this.props.navigation.navigate("Cards", { title });
  };

  render() {
    return (
      <Container>
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
          <Form
            value={this.state.title}
            onSubmit={this.handleSubmit}
            onChangeText={title => this.setState({ title })}
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default connect(null, { addDeck })(NewDeckScreen);
