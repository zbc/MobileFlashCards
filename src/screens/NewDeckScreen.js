import React, { Component } from "react";
import { Keyboard } from "react-native";
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
    this.props.addDeck(this.state.title);
    this.setState({ title: "" });
    Keyboard.dismiss();
    this.props.navigation.navigate("Decks");
  };

  render() {
    return (
      <Container>
        <Form
          value={this.state.title}
          onSubmit={this.handleSubmit}
          onChangeText={title => this.setState({ title })}
        />
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addDeck: title => dispatch(addDeck(title))
  };
};

export default connect(null, mapDispatchToProps)(NewDeckScreen);
