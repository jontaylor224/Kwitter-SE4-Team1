import {
  GET_MESSAGE,
  GET_MESSAGE_FAIL,
  GET_MESSAGE_SUCCESS
  
} from "../actions";

const initialState = {
  getMessageLoading: false,
  getMessageError: null,
  messages: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGE:
      return {
        ...state,
        getMessageLoading: true,
        getMessageError: null
      };
    case GET_MESSAGE_SUCCESS:
      return { ...state, messages: action.payload.messages, getMessageLoading: false };
    case GET_MESSAGE_FAIL:
      return { ...state, getMessageError: action.payload, getMessageLoading: false };
    default:
      return state;
  }
};
