import { AsyncStorage } from "react-native";
import { FLASHCARD_STORAGE_KEY } from "../data";

const removeAllDecks = () => {
  try {
    return AsyncStorage.removeItem(FLASHCARD_STORAGE_KEY);
  } catch (e) {
    console.log(e);
  }
};

const getDecks = () => {
  try {
    return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then(result => {
      return JSON.parse(result);
    });
  } catch (e) {
    console.log(e);
  }
};

const getDeck = id => {
  try {
    return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then(
      result => JSON.parse(result)[id]
    );
  } catch (e) {
    console.log(e);
  }
};

const saveDeckTitle = title => {
  try {
    return AsyncStorage.mergeItem(
      FLASHCARD_STORAGE_KEY,
      JSON.stringify({
        [title]: {
          title,
          questions: []
        }
      })
    );
  } catch (e) {
    console.log(e);
  }
};

const addCardToDeck = async (title, question, answer) => {
  try {
    let decks = await AsyncStorage.getItem(FLASHCARD_STORAGE_KEY);
    decks = JSON.parse(decks);

    return AsyncStorage.mergeItem(
      FLASHCARD_STORAGE_KEY,
      JSON.stringify({
        [title]: {
          title,
          questions: [
            ...decks[title].questions,
            {
              question,
              answer
            }
          ]
        }
      })
    );
  } catch (e) {
    console.log(e);
  }
};

export { getDecks, getDeck, saveDeckTitle, addCardToDeck, removeAllDecks };
