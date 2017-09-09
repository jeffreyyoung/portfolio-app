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
			id: '',
			level: '',
			color: ''
		}, initialValues));
	}
	
	setAttributes(attributes) {
		extendObservable(this, Object.assign(attributes));
	}
	
	setId(id) {
		this.id = id;
	}
	
	setLevel(level) {
		this.level = level;
	}
	
	setColor(color) {
		this.color = color;
	}
	
	setActivity(activity) {
		this.activity = activity;
	}
	
	setType(type) {
		this.type = type;
	}
}


const newPostStore = new NewPost();

setInterval(() => {
	newPostStore.description = 'asdf' + getRandomInt(0, 9);
}, 1000);

export default newPostStore;
