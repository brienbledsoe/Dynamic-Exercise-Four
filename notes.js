//app.js

const express = require('express');
const app = express();
cont port = process.env.PORT || 4000;

const indexRoute = require('./routes/index.js');
const postRoute = require('./route/post.js');
//static file serving
app.user('/static', express.static('public'));

app.listen(port, ()


/*============================================================================================================*/

/*code that goes into routes.js file. Need to create a firebase app, then initialize the app, and then create a config
I think this is the routes page. Also when looking at documentation in firebase focus on Web and Node.js implementations*/

const express = require('express');
const router = express.Router();
const firebase = require('firebase');

const firebaseConfig = {
	apiKey: "",
	authDomain: "",
	databaseURL: "",
	projectID: "",
	//storeageBUcket: "",
	//messagingSenderId: "",
	//appID: "",
	//mesurementID: ""

}

const firestoreDatabase = firebase.initializeApp(firebaseConfig);
const db = firestoreDatabase.firestore();

db.collection('BlogPosts').get();
let posts = [];
db.collection('BlogPosts').get()
	.then(
		blogPosts => {
			posts = blogPosts.data();
			console.log('blogPosts',blogPosts);
		}
	)
	.catch(err => {
		console.log('error',err);
	})

	router.get('/',(req,res) => {
		res.send(posts);
	})

	module.exports = router;
