import { FETCH_CRYPTOS } from "./types";

import axios from "axios";

export const getCryptos = () => {
    return dispatch => {
      axios.get('https://api.iextrading.com/1.0/stock/market/crypto')
      .then(response => {
        dispatch({
          type: 'FETCH_CRYPTOS',
          payload: response.data
        })
      }).catch(e => {})
    }
};
