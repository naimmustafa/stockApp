import {
    FETCH_CRYPTOS
   } from "../actions/types";

const INITIAL_STATE = {
  cryptos: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CRYPTOS:
      return { ...state, cryptos: action.payload };
    default:
      return state;
  }
};
