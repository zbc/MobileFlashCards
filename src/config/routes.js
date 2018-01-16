import React from "react";
import { Button } from "react-native";
import { TabNavigator, StackNavigator } from "react-navigation";

import { Ionicons } from "@expo/vector-icons";
import DecksScreen from "../screens/DecksScreen";
import NewDeckScreen from "../screens/NewDeckScreen";
import CardsScreen from "../screens/CardsScreen";
import QuizScreen from "../screens/QuizScreen";
import AddCardScreen from "../screens/AddCardScreen";

const CardsStack = StackNavigator(
  {
    Cards: {
      screen: CardsScreen,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.state.params.title}`,
        headerLeft: (
          <Button title=" < Decks" onPress={() => navigation.goBack(null)} />
        )
      })
    },
    AddCard: {
      screen: AddCardScreen,
      navigationOptions: ({ navigation }) => ({
        title: `Add Card to ${navigation.state.params.title} Deck`
      })
    },
    Quiz: {
      screen: QuizScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Quiz"
      })
    }
  },
  {
    headerMode: "screen"
  }
);

const DecksStack = StackNavigator(
  {
    Decks: {
      screen: DecksScreen,
      navigationOptions: {
        header: () => null
      }
    },
    Cards: {
      screen: CardsStack
    }
  },
  {
    headerMode: "none"
  }
);

export default TabNavigator(
  {
    Decks: {
      screen: DecksStack,
      navigationOptions: {
        tabBarLabel: "Decks",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-albums" size={30} color={tintColor} />
        )
      }
    },
    NewDeck: {
      screen: NewDeckScreen,
      navigationOptions: {
        tabBarLabel: "New Deck",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-add-circle" size={30} color={tintColor} />
        )
      }
    }
  },
  {
    headerMode: "none"
  }
);
