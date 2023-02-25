import styled, { css } from 'styled-components';
import theme from '../theme';

interface RowProps {
  apart: boolean;
  negativeMargin: boolean;
}

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  flex-wrap: wrap;
  justify-content: ${(p: RowProps) => (p.apart ? 'space-between' : '')};
  margin: ${(p: RowProps) => (p.negativeMargin ? '0 -12px' : '0')};

  @media (max-width: ${theme.breakpoints.s}) {
    margin-bottom: ${theme.spacing(1)};
  }
`;

export default Row;
