/* istanbul ignore file */
import styled, { AnyStyledComponent } from 'styled-components';
import devices from '../../configs/styles/devices';

const FONT_SIZES: {
  [key: string]: string;
} = {
  h1: '2.8rem',
  h2: '2.1rem',
  h3: '1.8rem'
};

export default (
  heading: string,
  { center, noMargin, color, noBold, bold }: any
) => styled(heading as AnyStyledComponent)`
    font-family: ${props => props.theme.fonts.primary.family};
    font-size: ${FONT_SIZES[heading]};
    font-weight: ${noBold ? '400' : bold};
    margin: 0;
    ${center && 'text-align: center;'}
    ${!noMargin && 'margin-bottom: 4rem;'}
    color: ${props => props.theme.colors[color]};

    strong {
        font-weight: 600;
    }

    span {
        display: block;
        font-size: 1.5rem;
        font-weight: 400;
        margin-top: 0.4rem;
        color: ${props => props.theme.colors.darkGray};
    }

    @media ${devices.desktop} {
        ${!noMargin && 'margin: 0 0 4.5rem;'}
    }
`;
