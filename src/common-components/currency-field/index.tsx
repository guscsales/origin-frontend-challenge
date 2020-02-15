import * as React from 'react';
import * as PropTypes from 'prop-types';
import {
  StyledWrapper,
  StyledLabel,
  StyledCurrencyField,
  StyledIcon
} from './styles';

export default function CurrencyField({
  label
}: PropTypes.InferProps<typeof CurrencyField.propTypes>): React.ReactElement {
  return (
    <div>
      <StyledLabel>{label}</StyledLabel>
      <StyledWrapper>
        <StyledIcon />
        <StyledCurrencyField />
      </StyledWrapper>
    </div>
  );
}

CurrencyField.propTypes = {
  label: PropTypes.node.isRequired
};
