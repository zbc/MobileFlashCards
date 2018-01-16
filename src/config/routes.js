import React from "react";
import { TabNavigator, StackNavigator } from "react-navigation";

import { Ionicons } from "@expo/vector-icons";
import DecksScreen from "../screens/DecksScreen";
import NewDeckScreen from "../screens/NewDeckScreen";
import CardsScreen from "../screens/CardsScreen";

const DecksStack = StackNavigator(
  {
    Decks: {
      screen: DecksScreen,
      navigationOptions: {
        header: () => null
      }
    },
    Cards: {
      screen: CardsScreen,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.state.params.title}`
      })
    }
  },
  {
    headerMode: "screen"
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
