import { SEARCH_TEXT, OPEN_MODAL, CLOSE_MODAL } from "../actions/types";

const INITIAL_STATE = {
  search: "",
  isModalOpen: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_TEXT:
      return { ...state, search: action.payload };
    case OPEN_MODAL:
      return { ...state, isModalOpen: true };
    case CLOSE_MODAL:
      return { ...state, isModalOpen: false };
    default:
      return state;
  }
};
