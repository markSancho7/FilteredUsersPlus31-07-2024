import { Route, Routes } from 'react-router-dom';
import List from '../components/list/List';
import UserInfo from '../components/userInfo/UserInfo';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<List />} />
			<Route path='/:userId' element={<UserInfo />} />
		</Routes>
	);
};
export default Router;
