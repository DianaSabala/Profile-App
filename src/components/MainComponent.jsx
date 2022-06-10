import { useEffect, useState } from "react";
import { ChangeUComponents } from "./ChangeUComponent";
import { DataComponent } from "./DataComponent";
import { HeaderComponent } from "./HeaderComponent";
import { InformationComponent } from "./InformationComponent";

export const MainComponent = ({ users, newUser }) => {
	const [current, setCurrent] = useState(0);
	const [texts, setTexts] = useState({});

	const previus = () => {
		setCurrent(current - 1);
		if (current === 0) {
			setCurrent(0);
		}
	};

	const next = () => {
		setCurrent(current + 1);
		if (current === users.length - 5) {
			newUser();
		}
	};

	useEffect(() => {
		changeTexts('user');
	}, [current]);

	const changeTexts = (icono) => {
		switch (icono) {
			case 'user':
				setTexts({
					parrafo: 'Hi, My name is',
					main: `${users[current].name.first} ${users[current].name.last}`,
					icono: 'user',
				});
				break;
			case 'email':
				setTexts({
					parrafo: 'My email address is',
					main: `${users[current].email}`,
					icono: 'email',
				});
				break;
			case 'birthday':
				setTexts({
					parrafo: 'My birthday is',
					main: `${users[current].dob.date.slice(
						8,
						10
					)}/${users[current].dob.date.slice(5, 7)}/${users[
						current
					].dob.date.slice(0, 4)}`,
					icono: 'birthday',
				});
				break;
			case 'address':
				setTexts({
					parrafo: 'My address is',
					main: `${users[current].location.street.number} ${users[current].location.street.name}`,
					icono: 'address',
				});
				break;
			case 'phone':
				setTexts({
					parrafo: 'My phone number is',
					main: `${users[current].phone}`,
					icono: 'phone',
				});
				break;
			case 'username':
				setTexts({
					parrafo: 'My username is',
					main: `${users[current].login.username}`,
					icono: 'username',
				});
				break;
			default:
				break;
		}
	};

	return (
		<>
			<div className='mainComponent'>
				<HeaderComponent user={users[current]}/>
				<DataComponent texts={texts}/>
				<InformationComponent user={users[current]} changeTexts={changeTexts} texts={texts}/>
				<ChangeUComponents current={current} previus={previus} next={next}/>
			</div>
		</>
	);
};