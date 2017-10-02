/* eslint-disable comma-dangle,eol-last */
'use strict';

module.exports = function(Note) {
  let PythonShell = require('python-shell');
  Note.runPyTest = function(cb) {
    let python3Script = 'common/py/test.py';
    let options = {
      mode: 'text',
      args: []
    };
    PythonShell.run(python3Script, options, function(err, results) {
      if (err) cb(err);
      console.log('results:: ', results);
      cb(null, {message: results});
    });
  };

  Note.remoteMethod('runPyTest', {
    accepts: [],
    returns: {
      arg: 'data',
      type: 'object'},
    http: {
      path: '/test',
      verb: 'get'
    }
  });
};