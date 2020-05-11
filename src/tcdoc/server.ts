import * as http from 'http';

const createHttpServer = (port: number): void => {
    http.createServer(function (request, response) {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end('Hello World\n');
    }).listen(port);
    console.log(`Server running at http://127.0.0.1:${port}/`);
}

createHttpServer(8080);