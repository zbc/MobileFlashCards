import { ADD_DECK, ADD_CARD, GET_DECKS } from "./types";
import { getDecks, saveDeckTitle, addCardToDeck } from "../utils/api";

const getAllDecks = async dispatch => {
  const decks = await getDecks();
  dispatch({
    type: GET_DECKS,
    decks
  });
};

const addDeck = title => {
  saveDeckTitle(title);
  return {
    type: ADD_DECK,
    title
  };
};

const addCard = (title, question, answer) => dispatch => {
  addCardToDeck(title, question, answer);
  dispatch({
    type: ADD_CARD,
    title,
    question,
    answer
  });
};

export { addDeck, addCard, getAllDecks };
