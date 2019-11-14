const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>(
  res.send('This is About The about me section')
));
router.get('/me', (req,res) => res.send('About Me'));


module.exports = router;
