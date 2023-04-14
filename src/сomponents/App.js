import React, { useState, useEffect} from 'react';
import Header from './Header';
import Slider from './Slider/Slider';
import Posts from './Posts/Posts';

const App = () => {
	const [postsId, setPostsId] = useState(null)

	const changePostsId = (id) =>{
		setPostsId(id)
	}

	const [bloggers, setBloggers] = useState([])
	useEffect(() => {
		fetchData();
	},[])

	const [posts, setPosts] = useState([])
	useEffect(() => {
		fetchDataPosts();
	},[])

	const fetchDataPosts = async () => {
		await fetch("https://jsonplaceholder.typicode.com/posts")
			.then((res) => res.json())
			.then((data) => setPosts(data))
			.catch((err) => {
			console.log(err);
			});
	};

	const fetchData = async () => {
		await fetch("https://jsonplaceholder.typicode.com/users")
		  .then((res) => res.json())
		  .then((data) => setBloggers(data))
		  .catch((err) => {
			console.log(err);
		  });
	  };

	return (
		<div>
			<Header />
			<Slider bloggers = {bloggers} changePostsId = {changePostsId}/>
			<Posts posts = {posts} postsId = {postsId} blogger = {bloggers.find((element) => {return element.id === postsId})}/>
		</div>
	);
};

export default App;
