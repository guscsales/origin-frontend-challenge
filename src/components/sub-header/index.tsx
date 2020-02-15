import * as React from 'react';
import styled from 'styled-components';
import devices from '../../configs/styles/devices';
import Title from '../../common-components/title';

export default function SubHeader(): React.ReactElement {
  const StyledSubHeader = styled.div`
    margin: 3rem 0;

    @media ${devices.desktop} {
      margin: 4.5rem 0;
    }
  `;

  return (
    <StyledSubHeader>
      <Title level={2} center noBold noMargin>
        Let's plan your <strong>saving goal.</strong>
      </Title>
    </StyledSubHeader>
  );
}
