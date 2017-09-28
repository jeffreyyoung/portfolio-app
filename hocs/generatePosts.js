function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

const users = [
  {
    "_id": "59a4eae131f4b176df795d8f",
    "picture": "https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-1/c39.0.200.200/p200x200/14570386_10154545534339188_3574268689282988354_n.jpg?oh=4b821eabbb31a65e8ad95d76dcd43752&oe=5A246946",
    "name": {
      "first": "Andrea",
      "last": "Yang"
    },
    "followers": [],
    "following": []
  },
  {
    "_id": "59a4eae1c5ba15bf09a69e01",
    "picture": "https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-1/c0.99.320.320/p320x320/16790_10152364562622751_1906852006350952881_n.jpg?oh=cbfd4ef9bba04c75ee4dc1858811100a&oe=5A600910",
    "name": {
      "first": "Jeffrey",
      "last": "Young"
    },
    "followers": [],
    "following": []
  },
  {
    "_id": "59a4eae1e30db4324f4405ae",
    "picture": "https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-1/c0.105.320.320/p320x320/263346_10151838177522817_496844008_n.jpg?oh=0a9d83b3f0c56cb2490c4b835a226adb&oe=5A2DC655",
    "name": {
      "first": "Brian",
      "last": "Farnsworth"
    },
    "followers": [],
    "following": []
  }
]

function getId() {
	return getRandomInt(0,999999);
}

function getUser() {
	return users[getRandomInt(0,3)];
}

function getLevel() {
	return getRandomInt(0, 6);
}

function getLocation() {
	const locations = ['Momentum Lehi', 'Momentum Millcreek', 'Momentum Sandy'];
	return locations[getRandomInt(0,3)]
}

function getText() {
	if (getRandomInt(0,2) === 1) {
		return 'Omg i finished a problem'
	} else {
		return null;
	}
}

function getRandomElement(items) {
	return items[Math.floor(Math.random()*items.length)]
}

function getPicture(user) {
	const images = {
		'Andrea':['andrea1','andrea2','andrea3','andrea4','andrea5'],
		'Jeffrey':['jeff1', 'jeff2'],
		'Brian':['jeff2'],
	}
	
	if (getRandomInt(0,3) === 1 || getRandomInt(0,3) === 1) {
		return getRandomElement(images[user.name.first])
	} else {
		return null;
	}
}

const posts = [...Array(20).keys()].map((i) => {
	
	const post = {
		_id: getId(),
		user: getUser(),
		level: getLevel(),
		location: getLocation(),
		text: getText(),
		likeCount: getRandomInt(0, 5),
		shareCount: getRandomInt(0,5),
		commentCount: getRandomInt(0,15),
		likedByCurrentUser: false
	}
	post.picture = getPicture(post.user)
	return post;
});


console.log('module.exports = ', JSON.stringify(posts));
