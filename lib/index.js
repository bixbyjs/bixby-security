exports = module.exports = {
  'password/authenticate': require('./password/authenticate'),
  'token/authenticate': require('./token/authenticate')
};

exports.load = function(id) {
  try {
    return require('./' + id);
  } catch (ex) {
    if (ex.code == 'MODULE_NOT_FOUND') { return; }
    throw ex;
  }
};