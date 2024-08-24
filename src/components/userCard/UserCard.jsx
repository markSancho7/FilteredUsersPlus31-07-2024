import { Link } from 'react-router-dom';
import { StyledActive, StyledContainer, StyledImg } from './styles';

const UserCard = ({ profileImage, name, active, userId }) => {
	console.log(userId);

	return (
		<StyledContainer>
			<StyledImg src={profileImage} alt='' />
			<p>{name}</p>
			<StyledActive $active={active}>
				{active ? 'activo' : 'no activo'}
			</StyledActive>
			<Link to={`/${userId}`}>User details</Link>
		</StyledContainer>
	);
};

export default UserCard;
