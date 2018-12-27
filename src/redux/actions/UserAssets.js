import { BUY_ASSETS, GET_MONEY, BUY_SAME_ASSETS } from "./types";

export const buyAssets = (amount, currency, symbol, assets) => {
  console.log(assets);
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
  return dispatch => {
    if (assets.length > 0) {
        if (assets.some(asset => asset.symbol === obj.symbol)) {
          dispatch({
            type: "BUY_SAME_ASSETS",
            assets: reducedAssets(assets, obj)
          });
        } else {
          dispatch({
            type: "BUY_ASSETS",
            payload: obj
          });
        }

    }
    dispatch({
      type: "BUY_ASSETS",
      payload: obj
    });
  };
};

export const getMoney = amount => {
  return {
    type: "GET_MONEY",
    payload: amount
  };
};
