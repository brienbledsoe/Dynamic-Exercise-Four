const express=require('express');
const router = express.Router();


var admin = require("firebase-admin");

var serviceAccount = require("../adminFolder/dynamic-exercise-four-firebase-adminsdk-xwpei-7b0d1dff40.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://dynamic-exercise-four.firebaseio.com"
});
let db = admin.firestore();

router.get('/', (req,res) => (
  res.send(
    db.collection('blog-posts').get()
      .then(snapshot => {
          snapshot.forEach(doc => {
            console.log(doc.id, '=>', doc.data());
          });
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });


));
//router.get('/me', (req, res) => (res.send('About me')));

module.exports = router;
