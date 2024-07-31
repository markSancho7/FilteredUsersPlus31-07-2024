import styled from 'styled-components';

const StyledContainer = styled.div`
	width: 400px;
	height: 80px;
	border: 1px solid black;
	border-radius: 10px;
	display: flex;
	flex-direction: row;
	padding: 10px;
	align-items: center;
	justify-content: space-between;
`;

const StyledImg = styled.img`
	width: 60px;
	height: 60px;
`;
const StyledActive = styled.p`
	color: ${({ $active }) => ($active ? 'green' : 'red')};
`;
export { StyledContainer, StyledImg, StyledActive };
