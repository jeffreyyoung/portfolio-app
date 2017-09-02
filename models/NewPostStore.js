import {observable} from "mobx";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


class NewPost {
	@observable date = 'Septermber 2, 2017'
	@observable activity = 'key0'
	@observable description = ''
	@observable type = 'key0'
	@observable problemId = ''
}


const newPostStore = new NewPost();

setInterval(() => {
	newPostStore.description = 'asdf' + getRandomInt(0, 9);
}, 1000);

export default newPostStore;
