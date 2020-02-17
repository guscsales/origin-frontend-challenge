import * as React from 'react';
import {
  StyledWrapper,
  StyledLabel,
  StyledCurrencyField,
  StyledIcon
} from './styles';

interface CurrencyFieldProps {
  label: React.ReactNode;
  defaultValue: number;
  onChange: (...args: any[]) => any;
  children?: React.ReactNode;
}

export const handleChangeValue = (
  maskedValue: string,
  value: number,
  setValue: React.Dispatch<React.SetStateAction<number>>,
  onChange: (...args: any[]) => any
) => {
  const finalMaskedValue = !maskedValue ? '0' : maskedValue;
  const finalValue = value <= 0 ? 0 : value;

  setValue(finalValue);
  onChange(finalMaskedValue, finalValue);
};

const CurrencyField: React.SFC<CurrencyFieldProps> = ({
  label,
  defaultValue,
  onChange
}) => {
  const [value, setValue] = React.useState(defaultValue);

  return (
    <div>
      <StyledLabel>{label}</StyledLabel>
      <StyledWrapper>
        <StyledIcon>$</StyledIcon>
        <StyledCurrencyField
          decimalSeparator=","
          precision={0}
          value={value}
          onChangeEvent={
            /* istanbul ignore next */ (
              e: any,
              maskedValue: string,
              value: number
            ) => handleChangeValue(maskedValue, value, setValue, onChange)
          }
        />
      </StyledWrapper>
    </div>
  );
};

CurrencyField.defaultProps = {
  onChange: /* istanbul ignore next */ () => {},
  defaultValue: 0
};

export default CurrencyField;
