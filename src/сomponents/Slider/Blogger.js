import React, { useEffect, useState } from 'react';

const Blogger = (props) => {

	const [dedicatedText, setDedicatedText] = useState("")
	const [dedicatedImg, setDedicatedImg] = useState("")
	
	useEffect(() => {
		if(props.active === props.bloggerData.id){
			setDedicatedText(" blogger__dedicated-text")
			setDedicatedImg("blogger__dedicated-img")
		} else 
		{
			setDedicatedText("")
			setDedicatedImg("")
		}
		
	}, [props.active, props.bloggerData.id]);

	
	return (
		<div className='blogger' onClick={() => props.changeActive(props.bloggerData.id)}>
			<div className='blogger__container'>
				<div className= {`${dedicatedImg}`}>
					<img className= {`blogger__img`} src = {`https://i.pravatar.cc/500?img=${props.bloggerData.id}`} alt = ""/>
				</div>

				<div className={`blogger__name ${dedicatedText}`}>
					{props.bloggerData.name}
				</div>

				<div className={`blogger__company ${dedicatedText}`}>
					{props.bloggerData.company.name}
				</div>
			</div>
		</div>
	);
};

export default Blogger;