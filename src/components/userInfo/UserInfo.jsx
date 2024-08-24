import { Link, useParams } from 'react-router-dom';
import { USERS } from '../../constants/users';

const UserInfo = () => {
	const { userId } = useParams();
	const currentUser = USERS.find(user => user.userId === userId);
	console.log('juan');

	return (
		<>
			<p>pepe</p>
			<p>{currentUser.userId}</p>
			<Link to={`/`}>back to users</Link>
		</>
	);
};
export default UserInfo;
