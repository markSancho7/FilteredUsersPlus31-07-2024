import { useState } from 'react';
import UserCard from './components/userCard/UserCard';
import { USERS } from './constants/users';

const App = () => {
	const [isActive, setIsActive] = useState(false);
	const [inputValue, setInputValue] = useState('');
	const [optionValue, setOptionValue] = useState(0);

	let filteredUsers = filterByActive(USERS, isActive);
	filteredUsers = filterByName(filteredUsers, inputValue);
	filteredUsers = filterBySelect(filteredUsers, optionValue);
	return (
		<>
			<div>
				<label htmlFor=''>active</label>
				<input
					onChange={() => confirmChange(isActive, setIsActive)}
					type='checkbox'
					name='checkbox'
					id=''
				/>
			</div>
			<div>
				<label htmlFor=''>por nombre</label>
				<input
					onChange={event => getInputValue(event.target.value, setInputValue)}
					type='text'
				/>
			</div>
			<div>
				<select
					onChange={event => changeOption(event.target.value, setOptionValue)}
					name=''
					id=''
				>
					<option value={0}>por defecto</option>
					<option value={1}>por nombre</option>
				</select>
			</div>
			{filteredUsers.map(user => {
				return <UserCard key={user.userId} {...user} />;
			})}
		</>
	);
};

const confirmChange = (isActive, setIsActive) => {
	setIsActive(!isActive);
	console.log(isActive);
};
const getInputValue = (value, setInputValue) => {
	setInputValue(value);
};
const changeOption = (value, setOptionValue) => {
	setOptionValue(value);
	console.log(value);
};

const filterByActive = (USERS, isActive) => {
	if (!isActive) {
		return [...USERS];
	}
	return USERS.filter(user => user.active);
};
const filterByName = (USERS, inputValue) => {
	if (!inputValue) {
		return [...USERS];
	}
	return USERS.filter(user =>
		user.name.toLowerCase().includes(inputValue.toLowerCase())
	);
};
const filterBySelect = (USERS, optionValue) => {
	if (optionValue === '0') {
		return [...USERS];
	}
	return USERS.sort((a, b) => {
		if (a.name > b.name) return 1;
		if (a.name < b.name) return -1;
		return 0;
	});
};

export default App;
