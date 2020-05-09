module.exports = (crowi, app) => {
  // add routes
  app.use('/_api/plugin/schedaus', require('./schedaus')(crowi, app));
};
