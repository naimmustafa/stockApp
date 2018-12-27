import { GET_MONEY, BUY_ASSETS } from "../actions/types";

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
    case GET_MONEY:
      return { ...state, money: state.money + action.payload };
    default:
      return state;
  }
};
