const express = require('express');
const router = express.Router();
const firebase = require('firebase');

const firebaseConfig = {
	apiKey: "AIzaSyDj9MA-GRGG3TF_DivLiiqW4TV-OOIcuA0",
	authDomain: "dynamic-exercise-four.firebaseio.com",
	databaseURL: "https://dynamic-exercise-four.firebaseio.com",
	projectId: "dynamic-exercise-four",
	//storeageBUcket: "",
	//messagingSenderId: "",
	//appID: "",
	//mesurementID: ""

}

const firestoreDatabase = firebase.initializeApp(firebaseConfig);
const db = firestoreDatabase.firestore();

let posts = [];
db.collection('BlogPosts').get()
	.then(
		BlogPosts => {
			posts =  BlogPosts.data();
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
