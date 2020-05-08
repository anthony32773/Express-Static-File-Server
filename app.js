var express = require("express");
var path = require("path");
var fs = require("fs");
var morgan = require("morgan");

var app = express();

app.use(morgan("short"));

var staticPath = path.join(__dirname, "static");
app.use(express.static(staticPath));

// First app.use to function as a logger
// These are all middleware functions
// We then use next to pass control to the next middleware function
// that we want to use
// Pass next as a parameter
// app.use(function(req, res, next)
// {
//     console.log("Request IP: " + req.url);
//     console.log("Request Date: " + new Date());
//     next();
// });

// Manual version of a file hoster - replaced by express.static function above
// app.use(function(req, res, next)
// {
//     var filePath = path.join(__dirname, "static", req.url);
//     fs.stat(filePath, function(err, fileInfo)
//     {
//         if (err)
//         {
//             next();
//             return;
//         }
//
//         if (fileInfo.isFile())
//         {
//             res.sendFile(filePath);
//         }
//         else
//         {
//             next();
//         }
//     });
// });

app.use(function(req, res)
{
    res.status(404);
    res.send("File not Found!");
});

app.listen(3000, function()
{
    console.log("App started on port 3000");
});