import {
  FETCH_CRYPTOS,
  LOADING_SPINNER,
  REFRESH_CRYPTOS,
  COUNTDOWN
} from "./types";

import axios from "axios";

export const loadingSpinner = () => {
  return {
    type: "LOADING_SPINNER",
    payload: { loading: true, text: "Loading..." }
  };
};

export const getCryptos = () => {
  return dispatch => {
    dispatch(loadingSpinner());
    axios
      .get("https://api.iextrading.com/1.0/stock/market/crypto")
      .then(response => {
        dispatch({
          type: "FETCH_CRYPTOS",
          payload: { data: response.data, loading: false }
        });
      })
      .catch(e => {});
  };
};

export const refreshCryptos = () => {
  return dispatch => {
    setInterval(() => {
      axios
        .get("https://api.iextrading.com/1.0/stock/market/crypto")
        .then(response => {
          dispatch({
            type: "REFRESH_CRYPTOS",
            payload: { data: response.data, countdown: 0 }
          });
        })
        .catch(e => {});
    }, 10000);
  };
};

export const countdown = () => {
  return dispatch => {
    setInterval(() => {
      dispatch({
        type: "COUNTDOWN"
      });
    }, 1000);
  };
};
