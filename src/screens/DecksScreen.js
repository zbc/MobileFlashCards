import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { List, ListItem } from "react-native-elements";

import { Container } from "../components/Container";
import { ListView } from "../components/ListView";

const deckData = {
  React: {
    title: "React",
    questions: [
      {
        question: "What is React?",
        answer: "A library for managing user interfaces"
      },
      {
        question: "Where do you make Ajax requests in React?",
        answer: "The componentDidMount lifecycle event"
      }
    ]
  },
  Javascript: {
    title: "Javascript",
    questions: [
      {
        question: "What is React?",
        answer: "A library for managing user interfaces"
      },
      {
        question: "Where do you make Ajax requests in React?",
        answer: "The componentDidMount lifecycle event"
      },
      {
        question: "What is a closure?",
        answer:
          "The combination of a function and the lexical environment within which that function was declared."
      }
    ]
  }
};

class DecksScreen extends Component {
  handlePress = (title, subTitle) => {
    this.props.navigation.navigate("Cards", { title, subTitle });
  };
  render() {
    return (
      <Container>
        <ListView data={deckData} onPress={this.handlePress} />
      </Container>
    );
  }
}

export default DecksScreen;
