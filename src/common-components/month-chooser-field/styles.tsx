import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const StyledLabel = styled.label`
  color: ${props => props.theme.colors.superDarkGray};
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  display: block;
`;

export const StyledArrow = styled.div`
  width: 6.7rem;
  height: 5.3rem;
  border-radius: ${props => (props.next ? '0 5px 5px 0' : '5px 0 0 5px')};
  border: 1px solid ${props => props.theme.colors.lightGray};
  background-color: ${props => props.theme.colors.lightGray};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.3rem;
  color: ${props => props.theme.colors.darkGray};
  cursor: pointer;
  user-select: none;

  svg {
    width: 0.9rem;
    height: 1.6rem;
    ${props => props.next && 'transform: scale(-1, 1);'}
  }
`;

export const StyledDatePickerField = styled.div`
  width: 100%;
  font-family: ${props => props.theme.fonts.primary.family};
  font-size: 1.8rem;
  font-weight: 700;
  padding: 0.7rem 0;
  border: 1px solid ${props => props.theme.colors.lightGray};
  border-left: none;
  border-right: none
  color: ${props => props.theme.colors.superDarkGray};
  position: relative;
  text-align: center;

  strong,
  span {
    display: block;
    user-select: none;
  }

  span {
    font-size: 1.5rem;
    font-weight: 400;
  }
`;
