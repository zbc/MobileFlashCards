import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { List, ListItem } from "react-native-elements";
import { connect } from "react-redux";
import _ from "lodash";

import { Container } from "../components/Container";
import { ListView } from "../components/ListView";

import { deckData } from "../data";
import { getAllDecks } from "../actions";

import { removeAllDecks } from "../utils/api";

class DecksScreen extends Component {
  componentWillMount() {
    // removeAllDecks();
    this.props.getAllDecks();
  }

  componentDidMount() {
    // console.log(this.props.decks);
  }

  componentWillReceiveProps(nextProps) {
    if (!_.isEqual(this.props.decks, nextProps.decks)) {
      this.props.getAllDecks();
    }
  }

  handlePress = (title, subTitle) => {
    this.props.navigation.navigate("Cards", { title, subTitle });
  };
  render() {
    const { decks } = this.props;
    return (
      <Container>
        <ListView data={decks} onPress={this.handlePress} />
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

export default connect(mapStateToProps, mapDispatchToProps)(DecksScreen);
