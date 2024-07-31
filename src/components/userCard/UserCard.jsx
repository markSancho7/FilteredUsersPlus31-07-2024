import { StyledActive, StyledContainer, StyledImg } from './styles';

const UserCard = ({ profileImage, name, active }) => {
	return (
		<StyledContainer>
			<StyledImg src={profileImage} alt='' />
			<p>{name}</p>
			<StyledActive $active={active}>
				{active ? 'activo' : 'no activo'}
			</StyledActive>
			<button>User details</button>
		</StyledContainer>
	);
};

export default UserCard;
