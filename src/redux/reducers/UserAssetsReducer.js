import { GET_MONEY, BUY_ASSETS, BUY_SAME_ASSETS } from "../actions/types";

const INITIAL_STATE = {
  money: 0,
  assets: []
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
        assets: action.payload
      }
    case GET_MONEY:
      return { ...state, money: state.money + action.payload };
    default:
      return state;
  }
};
