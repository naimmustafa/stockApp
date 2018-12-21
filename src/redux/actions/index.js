import {
    SEARCH_TEXT
  } from './types';

export const searchText = text => {
  return {
    type: 'SEARCH_TEXT',
    payload: text
  };
};
