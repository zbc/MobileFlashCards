import React, { Component } from "react";
import { View, Text } from "react-native";

import { Container } from "../components/Container";
import { TextWithSubtitle } from "../components/Text";
import { Button } from "../components/Button";

class CardsScreen extends Component {
  state = {
    disabled: false
  };
  componentDidMount() {
    const { subTitle } = this.props.navigation.state.params;
    console.log(subTitle);
    if (subTitle == 0) {
      this.setState({ disabled: true });
    } else {
      this.setState({ disabled: false });
    }
  }
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
        <Button
          disabled={this.state.disabled}
          onPress={() => this.props.navigation.navigate("Quiz", { title })}
        >
          Start Quiz
        </Button>
      </Container>
    );
  }
}

export default CardsScreen;
