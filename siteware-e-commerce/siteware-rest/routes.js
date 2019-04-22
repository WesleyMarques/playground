const Router = require('express').Router;
const router = new Router();


const pet = require('./model/pet/router');

router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to siteware-rest API!' });
});

router.use('/pet', pet);

module.exports = router;
