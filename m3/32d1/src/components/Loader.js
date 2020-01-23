import React from 'react';
import styled, { keyframes } from 'styled-components';
import rocket from './../img/rocket.svg';
import world from './../img/world.svg';

const loaderDiv = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	text-align: center;
`;

const Circle = keyframes`
    from { transform:rotate(360deg) ; }
    to { transform:rotate(0deg); }
`;

const InnerCircle = keyframes`
    from { transform:rotate(0deg); }
    to { transform:rotate(-360deg); }
`;
const RocketSpin = keyframes`

	  from { 	transform:rotate(0deg) ; }
  to { transform:rotate(360deg); }
`;
const RocketOuterDiv = styled.div`
	src: url(${rocket});
	width: 150px;
	margin: 20px auto 0;
	line-height: 1;
	animation: ${Circle} 5s linear infinite;
	transform-origin: 35% 275px;
	overflow: hidden;
`;
const RocketInnerDiv = styled.div`
	animation: ${InnerCircle} 5s linear infinite;
`;
const RocketImg = styled.img`
	animation: ${RocketSpin} 5s linear infinite;
`;

const WorldImg = styled.img`
	animation: ${RocketSpin} 9s linear infinite;
`;

function Loader() {
	return (
		<section className="loader" id="loader">
			<div>
				<RocketOuterDiv>
					<RocketInnerDiv>
						<RocketImg src={rocket} />
					</RocketInnerDiv>
				</RocketOuterDiv>
				<div>
					<WorldImg src={world} width="35%" />
				</div>
			</div>
			<h3>One moment while we perform a launch status check...</h3>
		</section>
	);
}

export default Loader;
