export const DataComponent = ({ texts }) => {
	return (
		<div className='dataComponent'>
			<div className='text-hi'>
				<p>{texts.parrafo}</p>
			</div>
			<div className='name'>
				<h5>{texts.main}</h5>
			</div>
		</div>
	);
};