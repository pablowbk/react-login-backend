const express = require('express');
const router = express.Router();
const User = require('../models/User');

//get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
    console.log(users)
    console.log('users fetched!!')
  } catch (err) {
    res.json(console.log({message: err}))
  }
});

//save new user
router.post('/', async (req, res) => {
 
  const user = new User({
    username: req.body.username,
    email: req.body.email
  })

  try {
    const newUser = await user.save();
    res.json(newUser);    
  } catch (err) {
    res.json({message: err})
  }
})

module.exports = router;