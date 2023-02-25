import { ReactElement } from 'react';

interface ITournamentParticipants {
  current: number;
  max: number;
}
export interface ITournamentObject {
  id: string;
  name: string;
  organizer: string;
  game: string;
  participants: ITournamentParticipants;
  startDate: string;
}

export interface IMainState {
  tournaments: any;
}

export interface ITournamentState {
  list: ITournamentObject[];
  searchStr: string;
}

export interface IReduxAction {
  type: string;
  payload: any;
}

export interface DivWithChild {
  children?: ReactElement;
}

export interface PostRequest {
  method: string;
  body?: string;
  headers?: HeadersInit;
}
