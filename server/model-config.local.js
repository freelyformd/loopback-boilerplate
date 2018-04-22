'use strict';

const passportModels = process.env.ENABLE_PASSPORT_AUTH !== 'true' ? {} :
  {
    'Application': {
      'dataSource': 'db',
      'public': true
    },
    'ApplicationCredential': {
      'dataSource': 'db',
      'public': true,
    },
    'UserCredential': {
      'dataSource': 'db',
      'public': true,
      'relations': {
        'user': {
          'type': 'belongsTo',
          'model': 'Person',
          'foreignKey': 'userId',
        },
      },
    },
    'UserIdentity': {
      'dataSource': 'db',
      'public': true,
      'relations': {
        'user': {
          'type': 'belongsTo',
          'model': 'Person',
          'foreignKey': 'userId',
        },
      },
    },
  };

module.exports = {
  ...passportModels,
};
