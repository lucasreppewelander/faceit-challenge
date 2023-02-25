import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider, useSelector } from 'react-redux';
import GlobalStyle from './GlobalStyle';
import store from './store';
import Container from './components/Container';
import H4 from './components/H4';
import Button from './components/Button';
import Input from './components/Input';
import Row from './components/Row';
import TournamentCard from './components/TournamentCard';
import CenteredText from './components/CenteredText';

import { ITournamentState, ITournamentObject, IMainState } from './interfaces';
import {
  getTournaments,
  searchTournaments,
  loadTournaments,
  createTournament,
} from './actions/tournaments';
import { useTypedDispatch } from './store';

const App = () => {
  const dispatch = useTypedDispatch();
  const tournaments = useSelector((state: IMainState) => state.tournaments);

  const fetchTournaments = () => {
    dispatch(loadTournaments);
    dispatch(getTournaments);
  };

  useEffect(() => {
    fetchTournaments();
  }, []);

  const onTournamentSearch = (
    evt: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = evt.target.value;
    dispatch(searchTournaments(value));
  };

  const onCreateTournament = () => {
    const name = window.prompt('Tournament name');
    if (name && name.trim().length) {
      dispatch(createTournament(name));
    }
  };

  const filterTournamentList = (list: Array<ITournamentObject>) => {
    if (tournaments.searchStr) {
      return list.filter((item) => {
        return (
          item.name
            .toUpperCase()
            .indexOf(tournaments.searchStr.toUpperCase()) === 0
        );
      });
    }

    return list;
  };

  return (
    <Container>
      <H4>FACEIT Tournaments</H4>

      <Row apart={true} negativeMargin={false}>
        <Input
          onChange={onTournamentSearch}
          placeholder="Search tournaments ..."
        />
        <Button onClick={onCreateTournament}>Create tournament</Button>
      </Row>
      <Row apart={false} negativeMargin={true}>
        {filterTournamentList(tournaments.list).map(
          (tournament: ITournamentObject) => (
            <TournamentCard key={tournament.id} {...tournament} />
          )
        )}
      </Row>

      {!tournaments.loading &&
      !tournaments.error &&
      filterTournamentList(tournaments.list).length === 0 ? (
        <CenteredText>No tournaments found.</CenteredText>
      ) : null}
      {tournaments.loading && !tournaments.error ? (
        <CenteredText>Loading tournaments ...</CenteredText>
      ) : null}
      {tournaments.error ? (
        <CenteredText>
          {tournaments.error}
          <Button onClick={fetchTournaments}>Retry</Button>
        </CenteredText>
      ) : null}
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
