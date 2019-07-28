// localhost:6789/    This route should serve a view file called index.html and display a greeting.
// localhost:6789/ninjas    This route should serve a view file called ninjas.html and display information about ninjas.
// localhost:6789/dojos/new    This route should serve a view file called dojos.html and have a form (don't worry about where the form should be sent to).
// If the URL is anything other than the ones above, have an error page load saying that the URL requested is not available.


var http = require('http');
var fs = require('fs');
var port = 6789;

var server = http.createServer(function(req, res){
    if(req.url === '/'){
        fs.readFile('index.html', function(error, data){
            if(error){
                res.writeHead(404);
                res.write('Error: File Not Found')
            } else {
                res.write(data)
            }
            res.end()
        })
    } else if(req.url === '/ninjas'){
        fs.readFile('ninjas.html', function(error, data){
            if(error){
                res.writeHead(404);
                res.write('Error: File Not Found')
            } else {
                res.write(data)
            }
            res.end()
        })
} else if(req.url === '/dojos/new'){
    fs.readFile('dojos.html', function(error, data){
        if(error){
            res.writeHead(404);
            res.write('Error: File Not Found')
        } else {
            res.write(data)
        }
        res.end()
    })
}
})

server.listen(port, function(error){
    if(error){
        console.log('Something went wrong');
    } else {
        console.log('Server is listening to port '+port)
    }
})