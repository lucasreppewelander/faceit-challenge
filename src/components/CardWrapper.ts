import styled from 'styled-components';
import theme from '../theme';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(33.3333% - ${theme.spacing(6)});
  padding: ${theme.spacing(3)};
  margin: ${theme.spacing(3)};
  box-sizing: border-box;
  border-radius: ${theme.borderRadius};
  background-color: ${theme.palette.background.base};
`;

export default CardWrapper;
