const http = require('http');

http.createServer(router).listen(3000);

function router(req, res) {
    console.log('new petition!');
    console.log(req.url);

    switch (req.url) {
        case '/Hi':
            res.write('hi whats up');
            res.end();
            break;
    
        default:
            res.write('Error 404: i dont know what do you')
            break;
    }

//     res.writeHead(201, {'Content-Type': 'text/plain'})
//     res.write('hi, i know how to use node')
//     res.end();
}
console.log('listening http on port 3000');