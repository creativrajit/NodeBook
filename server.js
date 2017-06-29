var http = require('http');

const hostName = '127.0.0.1';
const port = 8080;

function start() {
    function onRequest(request, response) {
        response.writeHead(200, {
            'Content-type': 'text/plain'
        });
        response.write('Hello World');
        response.end();
    }

    http.createServer(onRequest).listen(port, hostName);
}

exports.start = start;
