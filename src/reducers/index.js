/* eslint-disable no-case-declarations */
/* eslint-disable curly */
import { actions } from '../actions';

const reducer = (state, action) => {
  switch (action.type) {
    case actions.setFavorite:
      if (state.mylist.filter((element) => element.id === action.payload.id).length !== 0) {
        console.log('Ya tienes este elemento en tu lista');
        return state;
      };
      return {
        ...state,
        mylist: [...state.mylist, action.payload],
      };
    case actions.deleteFavorite:
      return {
        ...state,
        mylist: state.mylist.filter((items) => items.id !== action.payload),
      };
    case actions.loginRequest:
      return {
        ...state,
        user: action.payload,
      };
    case actions.logoutRequest:
      return {
        ...state,
        user: action.payload,
      };
    case actions.registerRequest:
      return {
        ...state,
        user: action.payload,
      };
    case actions.getVideoSource:
      return {
        ...state,
        playing: state.trends.find((item) => item.id === Number(action.payload)) ||
        state.originals.find((item) => item.id === Number(action.payload)) || [],
      };
    case actions.searchVideo:
      if (action.payload === '') return {
        ...state,
        search: [],
      };
      const listas = [...state.trends, ...state.originals];

      return {
        ...state,
        search: listas.filter((item) => item.title.toLowerCase().includes(action.payload)) || [],
      };
    default:
      return state;
  }
};

export default reducer;
