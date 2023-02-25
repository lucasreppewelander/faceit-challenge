import styled from 'styled-components';
import Button from './Button';
import theme from '../theme';

const CenteredText = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  ${theme.typography.h6};
  color: ${theme.palette.text.primary};
  padding: ${theme.spacing(10)};
  align-items: center;
  justify-content: center;

  ${Button} {
    width: fit-content;
    margin-top: ${theme.spacing(3)};
  }
`;

export default CenteredText;
