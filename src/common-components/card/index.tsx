import * as React from 'react';
import styled from 'styled-components';
import devices from '../../configs/styles/devices';

interface CardProps {
	layout?: boolean;
	footer?: React.ReactNode;
	children: React.ReactNode;
}

const Card: React.SFC<CardProps> = ({ layout, footer, children, ...props }) => {
	const mobileStyles = `
    @media ${devices.mobile} {
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.02);
      height: 100%;
      border-radius: 10px 10px 0 0;
      border: none;
    }
  `;

	const StyledCard = styled.div`
    background: #fff;
    border-radius: 7px;
    border: 1px solid ${props => props.theme.colors.lightGray};

    ${layout ? mobileStyles : ''}

    @media ${devices.desktop} {
      height: auto;
      border: 1px solid ${props => props.theme.colors.lightGray};
    }
  `;

	const containerPadding = `
    @media ${devices.mobile} {
      padding: 2rem 2.5rem;
    }

    @media ${devices.desktop} {
      padding: 4rem;
    }
  `;

	const StyledContent = styled.div`
		${containerPadding}
	`;

	const StyledFooter = styled.div`
    background-color: ${props => props.theme.colors.superLightGray};

    ${containerPadding}

    @media ${devices.mobile} {
      font-size: 1.3rem;
    }
  `;

	return (
		<StyledCard {...props}>
			<StyledContent>{children}</StyledContent>
			{footer && <StyledFooter>{footer}</StyledFooter>}
		</StyledCard>
	);
};

export default Card;
