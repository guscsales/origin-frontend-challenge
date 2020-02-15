import styled from 'styled-components';
import devices from '../../configs/styles/devices';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  height: 5.6rem;
  padding: 0;
  margin-bottom: 3rem;

  @media ${devices.desktop} {
    justify-content: flex-start;
    padding: 0 4rem;
    margin-bottom: 4.5rem;
  }
`;
