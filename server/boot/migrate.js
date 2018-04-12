'use strict';

module.exports = app => {
  // Auto updating models attached to `db` on underlying database
  app.dataSources.db.autoupdate(null, (err, a) => {
    if (err) throw err;
  });

  // To auto update models attached to other datasources,
  // simply add copy and paste the code above modifying the
  // datasource name
};
