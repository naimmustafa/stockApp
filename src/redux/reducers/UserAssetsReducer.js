import {
  GET_MONEY,
  BUY_ASSETS,
  BUY_SAME_ASSETS,
  BUYING_VOLUME,
  SELL_ASSETS
} from "../actions/types";

const INITIAL_STATE = {
  money: 0,
  assets: [],
  value: "+$"
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BUY_ASSETS:
      return {
        ...state,
        assets: [...state.assets, action.payload],
        money: state.money - action.payload.amount
      };
    case BUY_SAME_ASSETS:
      return {
        ...state,
        assets: action.payload.assets,
        money: state.money - action.payload.amount
      };
    case GET_MONEY:
      return {
        ...state,
        money: state.money + action.payload
      };
    case SELL_ASSETS:
      return {
        ...state,
        money: state.money + action.payload.money,
        assets: action.payload.assets
      };
    default:
      return state;
  }
};
