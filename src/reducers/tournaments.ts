import { ITournamentState, IReduxAction } from '../interfaces';

const initialState = {
  list: [],
  searchStr: '',
  loading: true,
  error: null,
};

export default function tournaments(
  state: ITournamentState = initialState,
  action: IReduxAction
) {
  switch (action.type) {
    case 'tournament/error':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case 'tournament/fetch':
      return {
        ...state,
        error: null,
        loading: true,
      };
    case 'tournament/search':
      return {
        ...state,
        searchStr: action.payload,
      };
    case 'tournament/get':
      return {
        ...state,
        list: action.payload,
        loading: false,
      };
    case 'tournament/add':
      return {
        ...state,
        list: [action.payload, ...state.list],
      };
    case 'tournament/update':
      return {
        ...state,
        list: [
          ...state.list.map((item) => {
            if (item.id === action.payload.id) {
              return { ...action.payload };
            }
            return item;
          }),
        ],
      };
    case 'tournament/remove':
      return {
        ...state,
        list: state.list.filter((t) => t.id !== action.payload),
      };
  }
  return state;
}
