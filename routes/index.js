const express=require('express');
const router = express.Router();

router.get('/', (req,res) => (res.send('This is About The API')));
//router.get('/me', (req, res) => (res.send('About me')));


module.exports = router;
