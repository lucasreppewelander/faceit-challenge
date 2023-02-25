import { Dispatch, AnyAction } from 'redux';
import { ITournamentObject } from '../interfaces';
import { get, post } from '../utils';

export const getTournaments = async (dispatch: Dispatch<AnyAction>) => {
  dispatch({ type: 'tournament/fetch' });

  try {
    // const response = await get('/tournaments');
    // added 5 seconds delay to mimic bad network
    const response = await get('/tournaments', 1000);
    if (response) {
      dispatch({ type: 'tournament/get', payload: response });
    }
  } catch (error) {
    dispatch({ type: 'tournament/error', payload: 'Something went wrong.' });
  }
};

export const loadTournaments = (dispatch: Dispatch<AnyAction>) => {
  dispatch({ type: 'tournament/fetch' });
};

export const searchTournaments =
  (searchStr: string) => (dispatch: Dispatch<AnyAction>) => {
    dispatch({ type: 'tournament/search', payload: searchStr });
  };

export const createTournament =
  (name: string) => async (dispatch: Dispatch<AnyAction>) => {
    const response = await post('/tournaments', { name });
    if (response) {
      dispatch({ type: 'tournament/add', payload: response });
    }
  };

export const updateTournament =
  (tournament: ITournamentObject) => (dispatch: Dispatch<AnyAction>) => {
    dispatch({ type: 'tournament/update', payload: tournament });
  };

export const deleteTournament =
  (id: string) => (dispatch: Dispatch<AnyAction>) => {
    dispatch({ type: 'tournament/remove', payload: id });
  };
