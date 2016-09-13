'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

const pkg = require(process.cwd() + '/package.json');

module.exports = (() => {
  var _ref = _asyncToGenerator(function* (_ref2) {
    let reply = _ref2.reply;

    reply.send(`${ reply.link(pkg.homepage, pkg.name) } v${ pkg.version }`);
  });

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})();