import * as React from 'react';
import styled from 'styled-components';
import CurrencyInput from 'react-currency-input';

export const StyledWrapper = styled.div`
  display: flex;
`;

export const StyledLabel = styled.label`
  color: ${props => props.theme.colors.superDarkGray};
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  display: block;
`;

export const StyledIcon = styled.div`
  width: 5.3rem;
  height: 5.3rem;
  border-radius: 5px 0 0 5px;
  border: 1px solid ${props => props.theme.colors.lightGray};
  background-color: ${props => props.theme.colors.superLightGray};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.3rem;
  color: ${props => props.theme.colors.darkGray};
`;

export const StyledCurrencyField = styled(props => (
  <CurrencyInput {...props} />
))`
  width: calc(100% - 5.5rem);
  font-family: ${props => props.theme.fonts.primary.family};
  font-size: 2rem;
  font-weight: 700;
  padding: 1rem 1.5rem;
  border: 1px solid ${props => props.theme.colors.lightGray};
  border-left: none;
  border-radius: 0 5px 5px 0;
  color: ${props => props.theme.colors.superDarkGray};
`;
