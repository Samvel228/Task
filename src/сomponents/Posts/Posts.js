import Post from './Post';
import Decor from "../../svg/decor.svg";
import Quotes from "../../svg/Quotes.svg";

const Posts = (props) => {
	return (
		<div className='actual-posts'>	
			<div className='actual-posts__dots'>
				<img src={Decor} alt="" />
			</div>
			
			<div className='actual-posts__quotes'>
				<img src={Quotes} alt="" />
			</div>

			<div className='posts, actual-posts__posts'>
				<h1 className='posts__title'>{props.blogger == null ? "" : "3 актуальных поста " + props.blogger.company.name}</h1>
				{props.posts.filter((item) => {return (item.userId === props.postsId)
					}).filter((item, index) => {return (item.userId === props.postsId && index < 3)
					}).map((post, index) => {
					return(
						<Post key={index} post = {post}/>
					)
					})
				}
			</div>
		</div>
	);
};

export default Posts;