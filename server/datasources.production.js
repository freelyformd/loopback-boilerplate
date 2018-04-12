'use strict';

const mailgunSettings = {
  'connector': 'loopback-connector-mailgun',
  'apikey': process.env.MAILGUN_KEY,
  'domain': process.env.MAILGUN_DOMAIN,
};

module.exports = {
  'db': {
    'name': 'db',
    'connector': 'memory',
    'file': 'storage.json',
  },
  'email': process.env.MAIL_PROVIDER ? mailgunSettings : {},
  'storage': {
    'name': 'storage',
    'connector': 'loopback-component-storage',
    'provider': process.env.STORAGE_PROVIDER,
    // For Amazon S3
    'key': process.env.STORAGE_AMAZON_KEY,
    'keyId': process.env.STORAGE_AMAZON_KEY_ID,
    // For Local File System
    'root': process.env.STORAGE_ROOT,
  },
};
