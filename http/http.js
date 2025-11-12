const http = require('http')
http.createServer((req, res) => {
    const path = req.url
    const method = req.method
    console.log(path, method)
 
    if (path.includes('/abc') && method == 'GET') {
        res.write('home page')
        res.end()
    } else {
        res.write('Contact page')
        res.end()
    }
}).listen(9000)


