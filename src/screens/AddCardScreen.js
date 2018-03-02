import React, { Component } from "react";
import { KeyboardAvoidingView } from "react-native";
import { connect } from "react-redux";

import { addCard } from "../actions";

import { Container } from "../components/Container";
import { CardForm } from "../components/Form";

class AddCardScreen extends Component {
  state = {
    question: "",
    answer: ""
  };

  handleSubmit = () => {
    const { question, answer } = this.state;
    const { title } = this.props.navigation.state.params;
    this.props.addCard(title, question, answer);
    this.setState({
      question: "",
      answer: ""
    });
    this.props.navigation.goBack(null);
  };

  render() {
    return (
      <Container>
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
          <CardForm
            questionValue={this.state.question}
            answerValue={this.state.answer}
            onQuestionChangeText={question => this.setState({ question })}
            onAnswerChangeText={answer => this.setState({ answer })}
            onSubmit={this.handleSubmit}
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default connect(null, { addCard })(AddCardScreen);
