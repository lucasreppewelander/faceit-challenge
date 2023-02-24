import { ReactElement } from 'react';

export interface ITournamentObject {
  id: number;
  name: string;
}

export interface IMainState {
  tournaments: any;
}

export interface ITournamentState {
  list: ITournamentObject[];
}

export interface IReduxAction {
  type: string;
  payload: any;
}

export interface DivWithChild {
  children?: ReactElement;
}
