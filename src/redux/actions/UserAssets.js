import { BUY_ASSETS, GET_MONEY } from "./types";
import { Alert } from "react-native";

export const buyAssets = (amount, currency, symbol, assets) => {
  console.log("hey its me mario", assets);
  const obj = {
    symbol: symbol.slice(0, -4),
    value: (amount / currency).toFixed(5),
    amount: Number(amount)
  };
  const reducedAssets = (arr, obj) => {
    return arr.reduce((all, next) => {
      if (obj["symbol"] === next["symbol"]) {
        return [...all, obj];
      }
      return [...all, next];
    }, []);
  };
  return () => {
    if (assets.length > 1) {
      return {
        type: "BUY_ASSETS",
        assets: reducedAssets(assets, obj)
      };
    }
    return {
      type: "BUY_ASSETS",
      payload: {
        symbol: symbol.slice(0, -4),
        value: (amount / currency).toFixed(5),
        amount: Number(amount)
      }
    };
  };
};

export const getMoney = amount => {
  return {
    type: "GET_MONEY",
    payload: amount
  };
};
