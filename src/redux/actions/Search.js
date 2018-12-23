import {
    SEARCH_TEXT,
    OPEN_MODAL,
    CLOSE_MODAL
  } from './types';

export const searchText = text => {
  return {
    type: 'SEARCH_TEXT',
    payload: text
  };
};

export const openModal = () => {
  return {
    type: 'OPEN_MODAL'
  }
}

export const closeModal = () => {
  return {
    type: 'CLOSE_MODAL'
  }
}
