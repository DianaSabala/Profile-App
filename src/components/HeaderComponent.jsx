export const HeaderComponent = ({ user }) => {
	const { name, picture } = user;
	return (
		<div className='headerComponent'>
			<img
				src={picture.large}
				alt={`${name.first} ${name.last}`}
			/>
		</div>
	);
};