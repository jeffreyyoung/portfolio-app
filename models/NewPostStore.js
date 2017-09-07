import {observable, extendObservable} from "mobx";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


class NewPost {
	constructor(initialValues) {
		extendObservable(this, Object.assign({
			date: 'Septermber 2, 2017',
			activity: 'key0',
			description: '',
			type: 'key0',
			problemId: '',
		}, initialValues));
	}
}


const newPostStore = new NewPost();

setInterval(() => {
	newPostStore.description = 'asdf' + getRandomInt(0, 9);
}, 1000);

export default newPostStore;
