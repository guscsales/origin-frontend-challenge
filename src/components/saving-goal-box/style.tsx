import styled from 'styled-components';
import devices from '../../configs/styles/devices';
import Svg from '../../common-components/svg';

export const StyledIcon = styled(Svg)`
  width: 6rem;
  height: 6.4rem;

  @media ${devices.desktop} {
    width: 7.4rem;
    height: 6rem;
  }
`;

export const StyledCols = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;

  > * {
    width: 100%;
    margin-bottom: 1.9rem;
  }

  @media ${devices.desktop} {
    flex-wrap: nowrap;

    > * {
      padding-right: 1.7rem;

      :last-child {
        padding: 0;
      }
    }
  }
`;

export const StyledResult = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
