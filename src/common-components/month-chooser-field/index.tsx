import * as React from 'react';
import * as PropTypes from 'prop-types';
import arrow from '../../assets/svg/icons/arrow.svg';
import getMonthsFromNow from '../../lib/get-months-from-now';

import {
  StyledWrapper,
  StyledLabel,
  StyledDatePickerField,
  StyledArrow
} from './styles';
import Svg from '../svg';

enum MonthChooserArrowTypes {
  INCREMENT,
  DECREMENT
}

export default function MonthChooserField({
  label,
  defaultValue,
  onChange
}: PropTypes.InferProps<
  typeof MonthChooserField.propTypes
>): React.ReactElement {
  const [months, setMonths] = React.useState(defaultValue);
  const [dateLabel, setDateLabel] = React.useState(
    getMonthsFromNow(defaultValue)
  );

  function handleChangeMonths(type: MonthChooserArrowTypes) {
    let newMonthValue = months;

    if (type === MonthChooserArrowTypes.DECREMENT && months > 1) {
      newMonthValue = months - 1;
    } else if (type === MonthChooserArrowTypes.INCREMENT) {
      newMonthValue = months + 1;
    }

    console.log(newMonthValue);

    const dateLabels = getMonthsFromNow(newMonthValue);

    setMonths(newMonthValue);
    setDateLabel(dateLabels);

    onChange(newMonthValue, dateLabels);
  }

  return (
    <div>
      <StyledLabel>{label}</StyledLabel>
      <StyledWrapper>
        <StyledArrow
          onClick={() => handleChangeMonths(MonthChooserArrowTypes.DECREMENT)}
        >
          <Svg src={arrow} />
        </StyledArrow>
        <StyledDatePickerField>
          <strong>{dateLabel.month}</strong>
          <span>{dateLabel.year}</span>
        </StyledDatePickerField>
        <StyledArrow
          next
          onClick={() => handleChangeMonths(MonthChooserArrowTypes.INCREMENT)}
        >
          <Svg src={arrow} />
        </StyledArrow>
      </StyledWrapper>
    </div>
  );
}

MonthChooserField.propTypes = {
  label: PropTypes.node.isRequired,
  defaultValue: PropTypes.number,
  onChange: PropTypes.func
};

MonthChooserField.defaultProps = {
  onChange: () => {},
  defaultValue: 1
};
