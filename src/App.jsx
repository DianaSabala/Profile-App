import './App.css';
import { useState } from 'react';
import { userRandom } from './get user/getUser.js';
import { MainComponent } from './components/MainComponent';

const App = () => {
  const [users, setUsers] = useState([]);

	const newUser = () => {
		const oldUsers = [...users];
		userRandom().then((usuarios) => {
			setUsers([...oldUsers, ...usuarios]);
		});
	};

  if (users.length === 0) {
		userRandom().then((usuarios) => {
			setUsers(usuarios);
   			//console.log(usuarios);
		});
	} 
  else {
		return (
			<>
				<header>
					<div className='title'>
						<h1>Profiles App</h1>
						<h3>From Html to Api Rest </h3>
					</div>
				</header>
				<main>
					<MainComponent users={users} newUser={newUser}/>
				</main>
			</>
		);
	};
};

export default App;