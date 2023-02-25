import { ITournamentObject } from '../interfaces';
import styled from 'styled-components';
import theme from '../theme';

import { useTypedDispatch } from '../store';
import { updateTournament, deleteTournament } from '../actions/tournaments';
import React from 'react';
import H6 from './H6';
import Button from './Button';
import CardWrapper from './CardWrapper';

const ListItem = styled.li`
  list-style: none;
  line-height: 1.5em;
  ${theme.typography.body}
`;

const ListWrapper = styled.ul`
  padding: 0;
  margin: 0;
`;

const ButtonRow = styled.div`
  display: flex;
  flex: 1;
  margin-top: ${theme.spacing(3)};

  ${Button} + ${Button} {
    margin-left: ${theme.spacing(2)};
  }
`;

const TournamentCard = (props: ITournamentObject) => {
  const dispatch = useTypedDispatch();
  const { name, organizer, game, participants, startDate } = props;

  const generateDate = (date: string): string => {
    return `${new Date(date).toLocaleDateString()}, ${new Date(
      date
    ).toLocaleTimeString()}`;
  };

  const onEdit = () => {
    const newName = window.prompt('New tournament name');
    if (newName) {
      // update the tournament
      const editObject = { ...props, name: newName };
      dispatch(updateTournament(editObject));
    }
  };

  const onDelete = () => {
    const yes = window.confirm(
      'Are you sure you want to delete this tournament?'
    );

    if (yes) {
      dispatch(deleteTournament(props.id));
    }
  };

  return (
    <>
      <CardWrapper>
        <H6>{name}</H6>
        <ListWrapper>
          <ListItem>Organizer: {organizer}</ListItem>
          <ListItem>Game: {game}</ListItem>
          <ListItem>
            Participants: {participants.current}/{participants.max}
          </ListItem>
          <ListItem>Start: {generateDate(startDate)}</ListItem>
        </ListWrapper>

        <ButtonRow>
          <Button onClick={onEdit}>Edit</Button>
          <Button onClick={onDelete}>Delete</Button>
        </ButtonRow>
      </CardWrapper>
    </>
  );
};

export default TournamentCard;
