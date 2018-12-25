import { SELL_ASSETS, BUY_ASSETS } from "../actions/types";

const INITIAL_STATE = {
  money: 0,
  assets: [{ symbol: 'BTC', value: 0.2434 }, { symbol: 'ETH', value: 4.23423 }, { symbol: 'bok', value: 4.23423 }, { symbol: 'sik', value: 4.23423 }]
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BUY_ASSETS:
      return { ...state, search: action.payload };
    case SELL_ASSETS:
      return { ...state, isModalOpen: true };
    default:
      return state;
  }
};
