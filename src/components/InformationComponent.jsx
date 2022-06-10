export const InformationComponent = ({ changeTexts, texts }) => {
	const clase = (e) => {
		document
			.querySelectorAll('li > img')
			.forEach((icono) => (icono.className = ''));
		e.target.className = 'active';
		changeTexts(e.target.name);
	};

	return (
		<div className='informationComponent'>
			<ul>
				<li>
					<img
						name='user'
						src='/assets/user.svg'
						alt='icon'
						onMouseEnter={clase}
						className={
							texts.icono === 'user' ? 'active' : ''
						}
					/>
				</li>
				<li>
					<img
						name='email'
						src='/assets/email.svg'
						alt='icon'
						onMouseEnter={clase}
						className={
							texts.icono === 'email' ? 'active' : ''
						}
					/>
				</li>
				<li>
					<img
						name='birthday'
						src='/assets/birthday.svg'
						alt='icon'
						onMouseEnter={clase}
						className={
							texts.icono === 'birthday' ? 'active' : ''
						}
					/>
				</li>
				<li>
					<img
						name='address'
						src='/assets/address.svg'
						alt='icon'
						onMouseEnter={clase}
						className={
							texts.icono === 'address' ? 'active' : ''
						}
					/>
				</li>
				<li>
					<img
						name='phone'
						src='/assets/phone.svg'
						alt='icon'
						onMouseEnter={clase}
						className={
							texts.icono === 'phone' ? 'active' : ''
						}
					/>
				</li>
				<li>
					<img
						name='username'
						src='/assets/password.svg'
						alt='icon'
						onMouseEnter={clase}
						className={
							texts.icono === 'username' ? 'active' : ''
						}
					/>
				</li>
			</ul>
		</div>
	);
};