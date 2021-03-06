const express   = require('express');
const router    = express.Router();
const mongoose  = require('mongoose');
const passport  = require('passport');

const Post = require('../../models/Post')

// @route   GET api/posts/test
// @desc    Tests posts route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: "posts route work" }));


// @route   POST api/posts
// @desc    Create post
// @access  Private
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    //Need validation
    const newPost = new Post({
        text: req.body.text,
        name: req.body.name,
        //avatar: req.body.name,
        user: req.user.id //current log in user
    });

    newPost.save().then(post => res.json(post));
})


module.exports = router; 