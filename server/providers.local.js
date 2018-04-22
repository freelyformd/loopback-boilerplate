'use strict';

module.exports = {
  'facebook-login': {
    'provider': 'facebook',
    'module': 'passport-facebook',
    'clientID': process.env.FACEBOOK_CLIENT_ID,
    'clientSecret': process.env.FACEBOOK_CLIENT_SECRET,
    'callbackURL': process.env.FACEBOOK_CALLBACK_URL,
    'authPath': '/auth/facebook',
    'callbackPath': '/auth/facebook/callback',
    'successRedirect': '/auth/account',
    'scope': [
      'email',
    ],
    profileToUser: (_, profile) => {
      const names = profile.displayName.match(/(\w+)\s+(.+)/);
      const [__, firstname, lastname] = names;
      // TODO: Add es6 support to eslint
      return {firstname, lastname, ...profile};
    },
  },
  'google-link': {
    'provider': 'google',
    'module': 'passport-google-oauth',
    'strategy': 'OAuth2Strategy',
    'clientID': process.env.GOOGLE_CLIENT_ID,
    'clientSecret': process.env.GOOGLE_CLIENT_SECRET,
    'callbackURL': process.env.GOOGLE_CALLBACK_URL,
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

