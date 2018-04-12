'use strict';

module.exports = {
  'facebook-login': {
    'provider': 'facebook',
    'module': 'passport-facebook',
    'clientID': process.env.FACEBOOK_CLIENT_ID,
    'clientSecret': process.env.FACEBOOK_CLIENT_SECRET,
    'callbackURL': 'http://localhost:3000/auth/facebook/callback',
    'authPath': '/auth/facebook',
    'callbackPath': '/auth/facebook/callback',
    'successRedirect': '/auth/account',
    'scope': [
      'email',
    ],
  },
  'google-link': {
    'provider': 'google',
    'module': 'passport-google-oauth',
    'strategy': 'OAuth2Strategy',
    'clientID': process.env.GOOGLE_CLIENT_ID,
    'clientSecret': process.env.GOOGLE_CLIENT_SECRET,
    'callbackURL': 'http://localhost:3000/link/google/callback',
    'authPath': '/link/google',
    'callbackPath': '/link/google/callback',
    'successRedirect': '/link/account',
    'scope': [
      'email',
      'profile',
    ],
    'link': true,
  },
};
