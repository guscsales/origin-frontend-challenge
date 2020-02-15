import styled from 'styled-components';
import devices from '../../configs/styles/devices';

export const StyledWrapper = styled.div`
  animation: fadeIn 800ms ease-out;

  @media ${devices.desktop} {
    width: 56rem;
    margin: 0 auto;
  }

  @keyframes fadeIn {
    from {
      transform: translateY(20px);
      opacity: 0;
      visibility: hidden;
    }
    to {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const StyledCols = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;

  > * {
    margin-bottom: 1.9rem;
  }

  @media ${devices.desktop} {
    flex-wrap: nowrap;

    > * {
      width: 100%;
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
