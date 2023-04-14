// import React, { useEffect } from 'react';

const Post = (props) => {
	return (
		<div className='post'>
			<h1 className='post__title'>{props.post.title}</h1>
			<p>
				{props.post.body}
			</p>
		</div>
	);
};

export default Post;