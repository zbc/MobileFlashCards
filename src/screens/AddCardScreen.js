import React, { Component } from "react";
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
    this.props.navigation.navigate("Decks");
  };

  render() {
    // console.log(this.props.navigation.state.params.title);
    return (
      <Container>
        <CardForm
          questionValue={this.state.question}
          answerValue={this.state.answer}
          onQuestionChangeText={question => this.setState({ question })}
          onAnswerChangeText={answer => this.setState({ answer })}
          onSubmit={this.handleSubmit}
        />
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCard: (title, question, answer) =>
      dispatch(addCard(title, question, answer))
  };
};

export default connect(null, mapDispatchToProps)(AddCardScreen);
