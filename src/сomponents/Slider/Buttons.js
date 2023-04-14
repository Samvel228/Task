import { useState } from "react";

const Buttons = ({slider}) => {

	let [position, setPosition] = useState(0)

	const rightShift = () =>{
		if (position !== -1836){
			setPosition(position -= 306)
			slider.current.childNodes.forEach((element) =>{
				element.style.transform = `translateX(${position}px)`
			})
		}
		
	}

	const leftShift = () =>{
		if (position !== 0){
			setPosition(position += 306)
			slider.current.childNodes.forEach((element) =>{
				element.style.transform = `translateX(${position}px)`
			})
		}
	}

	return (
		<div className='buttons'>
			<button className='buttons__left-button' onClick={leftShift}></button>
			<button className='buttons__right-button' onClick={rightShift}></button>
		</div>
	);
};

export default Buttons;