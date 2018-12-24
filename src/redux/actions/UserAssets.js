import {
    BUY_ASSETS,
    SELL_ASSETS
  } from './types';

export const buyAssets = (amount, currency) => {
  return {
    type: 'BUY_ASSETS',
    payload: amount / currency
  };
};

export const sellAssets = (amount, currency) => {
  return {
    type: 'BUY_ASSETS',
    payload: amount / currency
  };
};
