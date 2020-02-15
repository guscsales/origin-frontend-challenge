import * as React from 'react';
import * as PropTypes from 'prop-types';
import {
  StyledWrapper,
  StyledLabel,
  StyledCurrencyField,
  StyledIcon
} from './styles';

export default function CurrencyField({
  label,
  defaultValue,
  onChange
}: PropTypes.InferProps<typeof CurrencyField.propTypes>): React.ReactElement {
  const [value, setValue] = React.useState(defaultValue);

  function handleChangeValue(e: any, maskedValue: string, value: number) {
    const finalMaskedValue = !maskedValue ? '0' : maskedValue;
    const finalValue = value <= 0 ? 0 : value;

    setValue(finalValue);
    onChange(finalMaskedValue, finalValue);
  }

  return (
    <div>
      <StyledLabel>{label}</StyledLabel>
      <StyledWrapper>
        <StyledIcon>$</StyledIcon>
        <StyledCurrencyField
          decimalSeparator=","
          precision={0}
          value={value}
          onChangeEvent={handleChangeValue}
        />
      </StyledWrapper>
    </div>
  );
}

CurrencyField.propTypes = {
  label: PropTypes.node.isRequired,
  defaultValue: PropTypes.number,
  onChange: PropTypes.func
};

CurrencyField.defaultProps = {
  onChange: () => {},
  defaultValue: 0
};
