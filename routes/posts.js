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
 if(!firebase.apps.length){
   firebase.initializeApp(firebaseConfig);
 }
 const db = firebase.firestore();
 /* **** End Firebase Config ***** */
 //Route: /post/:id
router.get("/:id", (req,res)=> {
  let queryID = req.params.id;
  let docRef = db.collection("BlogPosts").doc(queryID); //creating a reference to this docRef
  docRef //creating a reference of the document
  .get() //getting the information were requesting, have to look at the docs to tell us what we are getting
  .then(doc => res.send(doc.data())) // have to reference doc.data
  .catch(error => res.send(error));

})

// router.get('/', (req, res) =>(
//   res.send('This is About The about me section')
// ));
// router.get('/me', (req,res) => res.send('About Me'));


module.exports = router;
