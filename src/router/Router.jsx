import { Route, Routes } from 'react-router-dom';
import List from '../components/list/List';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<List />} />
		</Routes>
	);
};
export default Router;
