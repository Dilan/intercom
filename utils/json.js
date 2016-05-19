var fs = require('fs');

module.exports.read = function(filepath) {
    return new Promise(function(resolve, reject) {
        fs.readFile(filepath, 'utf8', function(err, content) {
            if (err) {
                return reject(err);
            }
            try {
                resolve(JSON.parse(content));
            } catch(err) {
                reject(err);
            }
        });
    });
};
