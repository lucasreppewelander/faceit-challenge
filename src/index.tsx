import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider, useDispatch, useSelector } from 'react-redux';
import GlobalStyle from './GlobalStyle';
import store from './store';
import Container from './components/Container';
import H4 from './components/H4';
import H6 from './components/H6';
import Button from './components/Button';
import Input from './components/Input';
import Row from './components/Row';
import TournamentCard from './components/TournamentCard';

import { ITournamentState, ITournamentObject, IMainState } from './interfaces';

const App = () => {
  const dispatch = useDispatch();
  const tournaments = useSelector((state: IMainState) => state.tournaments);

  useEffect(() => {
    console.log('tournaments', tournaments);
    dispatch({ type: 'tournaments/get' });
  }, []);

  const onTournamentSearch = (
    evt: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = evt.target.value;

    console.log('on-tournament-seach', value);
  };

  return (
    <Container>
      <H4>FACEIT Tournaments</H4>

      <Row apart={true}>
        <Input onChange={onTournamentSearch} />
        <Button>Create tournament</Button>
      </Row>
      <Row apart={false}>
        {tournaments.list.map((tournament: ITournamentObject) => (
          <TournamentCard key={tournament.id} {...tournament} />
        ))}
      </Row>
    </Container>
  );
};

const container = document.getElementById('root');
if (!container) {
  throw new Error('No container found');
}
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>
);
