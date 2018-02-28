import { ADD_DECK, ADD_CARD, GET_DECKS } from "../actions/types";

const initialState = {};
// const initialState = {
//   React: {
//     title: "React",
//     questions: [
//       {
//         question: "What is React?",
//         answer: "A library for managing user interfaces"
//       },
//       {
//         question: "Where do you make Ajax requests in React?",
//         answer: "The componentDidMount lifecycle event"
//       }
//     ]
//   },
//   JavaScript: {
//     title: "JavaScript",
//     questions: [
//       {
//         question: "What is a closure?",
//         answer:
//           "The combination of a function and the lexical environment within which that function was declared."
//       }
//     ]
//   },
//   Redux: {
//     title: "Redux",
//     questions: [
//       {
//         question: "What is Redux?",
//         answer: "Redux is a predictable state container for JavaScript apps"
//       }
//     ]
//   }
// };

const DeckReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DECKS:
      return {
        ...state,
        ...action.decks
      };
    case ADD_DECK:
      return {
        ...state,
        [action.title]: {
          title: action.title,
          questions: []
        }
      };
    case ADD_CARD:
      return {
        ...state,
        [action.title]: {
          ...state[action.title],
          questions: [
            ...state[action.title].questions,
            {
              question: action.question,
              answer: action.answer
            }
          ]
        }
      };
    default:
      return state;
  }
};

export default DeckReducer;
