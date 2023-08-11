const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { config } = require('../config/config')

router.post('/login',
passport.authenticate('local', {session: false}),
  async (req, res, next) => {
    try {
      const user = req.user
      const payload = {
        sub: user.id,
      }
      const token = jwt.sign(payload, config.jwtSecret, {expiresIn: '5min'});
      res.json({
        user,
        token
      });
    } catch (error) {
      next(error);
    }
  }
);



module.exports = router;
