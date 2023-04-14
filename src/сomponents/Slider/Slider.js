import React, { useRef, useState} from 'react';
import Blogger from './Blogger';
import Buttons from './Buttons';
import Decor from "../../svg/decor.svg";

const Slider = (props) => {
	const slider = useRef(null)
	const [active, setActive] = useState(null)

	const changeActive = (id) =>{
		
		if(active != null){
			slider.current.childNodes[active-1].style.background = "none";
		}
		setActive(id);
		props.changePostsId(id);
	}

	return (
		<div className='slider'>
			<div className='slider__decor'>
				<img src={Decor} alt="" />
			</div>
			<Buttons slider = {slider}/>
			<div className='slider__scroll' ref = {slider}>
				{props.bloggers.map((blogger, index) => {
					return(
						<Blogger key={index} bloggerData = {blogger} changeActive = {changeActive} active = {active}/>
					)
				})}
			</div>

		</div>
	);
};

export default Slider;