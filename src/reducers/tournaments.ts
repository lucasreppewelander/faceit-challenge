import { ITournamentState, IReduxAction } from '../interfaces';

const initialState = {
  list: [],
};

export default function tournaments(
  state: ITournamentState = initialState,
  action: IReduxAction
) {
  switch (action.type) {
    case 'tournament/get':
      return {
        ...state,
        list: action.payload,
      };
    case 'tournament/update':
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case 'tournament/remove':
      return {
        ...state,
        list: state.list.filter((t) => t.id !== action.payload),
      };
  }
  return state;
}
