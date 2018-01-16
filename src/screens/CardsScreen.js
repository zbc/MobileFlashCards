import React, { Component } from "react";
import { View, Text } from "react-native";

import { Container } from "../components/Container";
import { TextWithSubtitle } from "../components/Text";
import { Button } from "../components/Button";

class CardsScreen extends Component {
  render() {
    const { title, subTitle } = this.props.navigation.state.params;

    return (
      <Container>
        <TextWithSubtitle title={title} subTitle={subTitle} />
        <Button
          onPress={() => this.props.navigation.navigate("AddCard", { title })}
        >
          Add Card
        </Button>
        <Button onPress={() => this.props.navigation.navigate("Quiz")}>
          Start Quiz
        </Button>
      </Container>
    );
  }
}

export default CardsScreen;
