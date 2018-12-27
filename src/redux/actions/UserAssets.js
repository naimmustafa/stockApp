import { BUY_ASSETS, GET_MONEY } from "./types";

export const buyAssets = (amount, currency, symbol) => {
  return {
    type: "BUY_ASSETS",
    payload: {
      symbol: symbol.slice(0, -4),
      value: (amount / currency).toFixed(5),
      amount: Number(amount)
    }
  };
};

export const getMoney = amount => {
  return {
    type: "GET_MONEY",
    payload: amount
  };
};
