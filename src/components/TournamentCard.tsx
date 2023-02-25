import { ITournamentObject } from '../interfaces';
import styled from 'styled-components';
import theme from '../theme';

import React from 'react';
import H6 from './H6';
import Button from './Button';
import CardWrapper from './CardWrapper';
import Row from './Row';

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

const TournamentCard = ({
  id,
  name,
  organizer,
  game,
  participants,
  startDate,
}: ITournamentObject) => {
  const generateDate = (date: string): string => {
    return `${new Date(date).toLocaleDateString()}, ${new Date(
      date
    ).toLocaleTimeString()}`;
  };

  const onEdit = () => {
    const newName = window.prompt('New tournament name');
    console.log('newName', newName);
    if (newName) {
      // update the tournament
    }
  };

  const onDelete = () => {
    const yes = window.confirm(
      'Are you sure you want to delete this tournament?'
    );
    console.log('yes', yes);
    if (yes) {
      // remove it
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
