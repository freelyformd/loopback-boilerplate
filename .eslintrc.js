module.exports = {
  "extends": [
    "loopback",
    "plugin:jest/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 8,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    }
  },
  "rules": {
    "semi": 2
  },
  "env": {
    "node": true,
    "es6": true
  },
  "plugins": [
    "jest"
  ]
}
