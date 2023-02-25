import styled from 'styled-components';
import theme from '../theme';

const Container = styled.div`
  max-width: 960px;
  margin-top: ${theme.spacing(6)};
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${theme.breakpoints.s}) {
    max-width: 100%;
    margin: ${theme.spacing(3)};
  }

  @media (max-width: ${theme.breakpoints.m}) {
    max-width: 100%;
    margin: ${theme.spacing(3)};
  }
`;

export default Container;
