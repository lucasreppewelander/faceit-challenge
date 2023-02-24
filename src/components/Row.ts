import styled, { css } from 'styled-components';
import theme from '../theme';

interface RowProps {
  apart: boolean;
}

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${(p: RowProps) => (p.apart ? 'space-between' : '')};
`;

export default Row;
