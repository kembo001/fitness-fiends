let mymod = require("./my.mod")
const http = require("http")

http
.createServer((req, res)=>{
    let output = "Hello Worldddd!!!";
    res.end(output)
}).listen(3000)

const pi = mymod.PI
console.log("Hello World", pi)

