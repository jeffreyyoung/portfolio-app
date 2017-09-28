import {observable, extendObservable} from "mobx";

const initialPosts = require('./../hocs/posts.js');

class Post {
	constructor(initialValues) {
		extendObservable(this, initialValues);
	}
	
	get isPostByCurrentUser() {
		return this.post.user._id == '59a4eae1c5ba15bf09a69e0';
	}
}

class PostsStore {
	constructor() {
		extendObservable(this, {
			posts: []
		})
	}
	
	addPost(post) {
		this.posts.push(new Post(post));
	}
}

const store = new PostsStore();
// 59a4eae131f4b176df795d8f andrea
// 59a4eae1c5ba15bf09a69e01 jeff
initialPosts.forEach(post => store.addPost(post));

export default store;