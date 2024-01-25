const { log } = require('console');
const fs = require('fs');

function read(route, cb) {
    fs.readFile(route, (error, data) => {
        cb(data.toString());
    })
}

function write(route, content, cb){
    fs.writeFile(route, content, function (error){
        if (error) {
            console.error('I wasnt able to write', error);
        } else {
            console.log('I was able to write');
        }
    });
}

function destroy(route, cb) {
    fs.unlink(route, cb);
}

// write(__dirname + '/archivo1.txt', 'im a new file', console.log);
// read(__dirname + '/textfile.txt', console.log);
destroy(__dirname + '/archivo1.txt', console.log);