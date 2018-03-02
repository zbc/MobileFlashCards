import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

import { Container } from "../components/Container";
import { TextWithSubtitle } from "../components/Text";
import { Button } from "../components/Button";

import { getAllDecks } from "../actions";

class CardsScreen extends Component {
  state = {
    disabled: false
  };

  componentWillMount() {
    this.props.getAllDecks();
  }

  componentDidMount() {
    const { title } = this.props.navigation.state.params;
    const subTitle = this.props.decks[title].questions.length;
    if (subTitle == 0) {
      this.setState({ disabled: true });
    } else {
      this.setState({ disabled: false });
    }
  }

  render() {
    const { title } = this.props.navigation.state.params;
    const subTitle = this.props.decks[title].questions.length;

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

const mapStateToProps = ({ decks }) => {
  return {
    decks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllDecks: () => dispatch(getAllDecks)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardsScreen);
