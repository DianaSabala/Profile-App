import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export const ChangeUComponents = ({
	current,
	previus,
	next,
}) => {
	return (
		<div className='arrows'>
			<div
				className='arrow-left'
				hidden={current === 0}
				onClick={previus}
			>
				<AiOutlineArrowLeft />
			</div>

			<div
				className='arrow-right'
				onClick={next}
			>
				<AiOutlineArrowRight />
			</div>
		</div>
	);
};