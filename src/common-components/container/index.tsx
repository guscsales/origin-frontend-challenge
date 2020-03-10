import styled from 'styled-components';
import devices from '../../configs/styles/devices';

const Container = styled.div`
    width: 100%;

    @media ${devices.desktop} {
        width: ${props => props.theme.sizes.container.desktop};
        margin: 0 auto;
    }
  `;
};

export default Container;