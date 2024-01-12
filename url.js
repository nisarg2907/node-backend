// protocol , domain name,route,query params

const http = require("http");
const fs = require("fs");
const url = require("url")


const server = http.createServer((req,res)=>{
    if(req.url=="/favicon.ico")return res.end();
   const log = `${Date.now()}:${req.url} New request recieved\n`;
  
    fs.appendFile('logUrl.txt',log,(err,data)=>{
    const myurl = url.parse(req.url,true);
    console.log(myurl);
        switch (myurl.pathname) {
            case "/new":
                res.end("Hello here is your info from about part " );
                break;
                case "/about":
                    const user = myurl.query.myName;
                    res.end(`hello ${user} bhai`);
                break;
                case "/signup":
                  if(req.method==="GET")res.end("This is all the data andyou can get it");
                  if(req.method==="POST"){
                    // db query to post data
                    res.end("success");
                  }
                break;
              
        
            default:
                res.end("404 notfound");
                break;
        }
      
    });
  
    
});

server.listen(3001,()=>{
    console.log("listening started");
});

