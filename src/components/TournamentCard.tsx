import { ITournamentObject } from '../interfaces';

import React from 'react';
import H6 from './H6';
import CardWrapper from './CardWrapper';

const TournamentCard = ({ id, name }: ITournamentObject) => {
  return (
    <>
      <CardWrapper>
        <H6>
          {name} & {id}
        </H6>
      </CardWrapper>
    </>
  );
};

export default TournamentCard;
