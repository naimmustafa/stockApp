import {
  BUY_ASSETS,
  GET_MONEY,
  BUY_SAME_ASSETS,
  SELL_ASSETS,
  GET_USER_ASSETS
} from "./types";
import { Alert, AsyncStorage } from "react-native";

export const buyAssets = (amount, currency, symbol, assets) => {
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
            value: (Number(obj["value"]) + Number(next["value"])).toFixed(5),
            amount: Number(obj["amount"]) + Number(next["amount"])
          }
        ];
      }
      return [...all, next];
    }, []);
  };
  return dispatch => {
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

export const sellAssets = (currency, symbol, assets) => {
  const selectedAsset = assets.filter(
    asset => asset.symbol == symbol.slice(0, -4)
  );
  const newAssets = assets.filter(asset => !selectedAsset.includes(asset));

  return dispatch => {
    if (selectedAsset.length === 1) {
      dispatch({
        type: "SELL_ASSETS",
        payload: {
          money: Number((selectedAsset[0].value * currency).toFixed(4)),
          assets: newAssets
        }
      });
    } else {
      Alert.alert(
        "You dont have any coin",
        "Buy some crypto currency to sell and make some profit!"
      );
    }
  };
};

export const saveAsyncStorage = (assets, money) => async () => {
  try {
    await Promise.all(
      [AsyncStorage.setItem("AssetsStore", JSON.stringify(assets))],
      [AsyncStorage.setItem("MoneyStore", JSON.stringify(money))]
    );
  } catch (error) {
    // fail silently
  }
};

export const getAsyncStorage = () => async dispatch => {
  try {
    const asset = await AsyncStorage.getItem("AssetsStore");
    const money = await AsyncStorage.getItem("MoneyStore");
    console.log(money);
    if (money === null) {
      console.log("nothing");
    } else {
      dispatch({
        type: "GET_USER_ASSETS",
        payload: { assets: JSON.parse(asset), money: JSON.parse(money) }
      });
    }
  } catch (error) {
    // fail silently
  }
};
