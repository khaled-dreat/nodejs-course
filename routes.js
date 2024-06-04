const fs = require('fs');
const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;
    if (req.url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (req.url === '/message' && method === "POST") {
        const body = [];
        req.on("data", (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync("message.text", message);
        });
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write("<head><title>my first page</title><head>");
    res.write("<body><h1>my first nodejs</h1></body>");
    res.write('</html>');
    res.end();
};


// module.exports.hsdsd = requestHandler;
// module.exports.hsomeTextsdsd = "requestHandler";

module.exports = {
    requestHandler: requestHandler,
    someText: "1111111111111111111111"

};