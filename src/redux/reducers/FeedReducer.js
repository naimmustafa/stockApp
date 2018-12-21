import {
  FETCH_CRYPTOS,
  LOADING_SPINNER,
  REFRESH_CRYPTOS,
  COUNTDOWN
} from "../actions/types";

const INITIAL_STATE = {
  cryptos: [],
  loading: false,
  text: "",
  countdownNumber: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADING_SPINNER:
      return {
        ...state,
        loading: action.payload.loading,
        text: action.payload.text
      };
    case FETCH_CRYPTOS:
      return {
        ...state,
        cryptos: action.payload.data,
        loading: action.payload.loading
      };
    case REFRESH_CRYPTOS:
      return {
        ...state,
        cryptos: action.payload.data,
        countdownNumber: action.payload.countdown
      };
    case COUNTDOWN:
      return {
        ...state,
        countdownNumber: state.countdownNumber + 1
      };
    default:
      return state;
  }
};
