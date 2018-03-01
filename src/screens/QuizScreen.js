import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

import { Container } from "../components/Container";
import { SimpleButton, Button } from "../components/Button";
import { TextWithIndex } from "../components/Text";
import { Card, ScoreCard } from "../components/Card";
import { setLocalNotification, clearLocalNotification } from "../utils/helper";

class QuizScreen extends Component {
  state = {
    total: 1,
    index: 1,
    flip: false,
    done: false,
    score: 0
  };
  componentDidMount() {
    this.setState({
      total: this.props.deck.questions.length
    });
  }

  flipAnswer = () => {
    const { flip } = this.state;
    this.setState({ flip: !flip });
  };

  handleCorrect = () => {
    const { index, total, flip, score } = this.state;
    if (index < total) {
      this.setState({ index: index + 1, flip: !flip, score: score + 1 });
    } else {
      this.setState({ done: true, score: score + 1 });
    }
  };

  handleIncorrect = () => {
    const { index, total, flip } = this.state;
    if (index < total) {
      this.setState({ index: index + 1, flip: !flip });
    } else {
      this.setState({ done: true });
    }
  };

  handleBack = () => {
    this.setState({
      total: 1,
      index: 1,
      flip: false,
      done: false,
      score: 0
    });
    this.props.navigation.navigate("Decks");
    clearLocalNotification().then(setLocalNotification);
  };

  handleStartOver = () => {
    this.setState({
      total: 1,
      index: 1,
      flip: false,
      done: false,
      score: 0
    });
    this.props.navigation.goBack(null);
    clearLocalNotification().then(setLocalNotification);
  };

  render() {
    const { questions } = this.props.deck;
    const { total, index, flip, done, score } = this.state;

    return (
      <Container>
        {done ? (
          <ScoreCard
            score={score / total * 100}
            onPressStartOver={this.handleStartOver}
            onPressBack={this.handleBack}
          />
        ) : (
          // <View>
          //   <Text>Score: {score / total * 100}%</Text>
          //   <Button onPress={this.handleBack}>Back</Button>
          // </View>
          <View style={{ flex: 1 }}>
            <TextWithIndex index={index} total={total} />
            <Card questions={questions} index={index} flip={flip} />
            <SimpleButton onPress={this.flipAnswer}>
              {flip ? "Question" : "Answer"}
            </SimpleButton>
            {flip && (
              <View>
                <Button onPress={this.handleCorrect}>Correct</Button>
                <Button
                  onPress={this.handleIncorrect}
                  backgroundColor="#e50000"
                >
                  Incorrect
                </Button>
              </View>
            )}
          </View>
        )}
      </Container>
    );
  }
}

const mapStateToProps = ({ decks }, ownProps) => {
  return {
    deck: decks[ownProps.navigation.state.params.title]
  };
};

export default connect(mapStateToProps)(QuizScreen);
