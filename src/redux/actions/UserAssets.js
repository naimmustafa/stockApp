import { BUY_ASSETS, GET_MONEY, BUY_SAME_ASSETS } from "./types";

export const buyAssets = (amount, currency, symbol, assets) => {
  console.log(assets);
  const obj = {
    symbol: symbol.slice(0, -4),
    value: Number((amount / currency).toFixed(5)),
    amount: Number(amount)
  };
  const reducedAssets = (arr, obj) => {
    return arr.reduce((all, next) => {
      if (obj["symbol"] === next["symbol"]) {
        return [
          ...all,
          {
            ...obj,
            value: (Number(obj["value"]) + Number(next["value"])).toFixed(5)
          }
        ];
      }
      return [...all, next];
    }, []);
  };
  return dispatch => {
    console.log("Im from action", reducedAssets(assets, obj));
    if (assets.some(asset => asset.symbol === obj.symbol)) {
      dispatch({
        type: "BUY_SAME_ASSETS",
        payload: { assets: reducedAssets(assets, obj), amount: amount }
      });
    } else {
      dispatch({
        type: "BUY_ASSETS",
        payload: {
          symbol: symbol.slice(0, -4),
          value: (amount / currency).toFixed(5),
          amount: Number(amount)
        }
      });
    }
  };
};

export const getMoney = amount => {
  return {
    type: "GET_MONEY",
    payload: amount
  };
};
