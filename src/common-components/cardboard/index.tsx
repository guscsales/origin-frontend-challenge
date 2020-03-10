import * as React from 'react';
import styled from 'styled-components';
import devices from '../../configs/styles/devices';
import Card from '../card';

interface CardboardProps {
	children: React.ReactNode;
}
const Cardboard: React.SFC<CardboardProps> = ({ children }) => {
	const StyledWrapper = styled.div`
		animation: fadeIn 800ms ease-out;

		@media ${devices.desktop} {
			width: 56rem;
			margin: 0 auto 5rem;
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

	return (
		<StyledWrapper>
			<Card layout>{children}</Card>
		</StyledWrapper>
	);
};

export default Cardboard;
