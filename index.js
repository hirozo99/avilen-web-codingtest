const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
   const endpoint = req.url;
   if( endpoint==='/start' ){
      fs.readFile('./index.html',(err, data)=>{
         res.writeHead(200, {'Content-Type': 'text/html'});
         res.write(data);
         res.end();
      });
   }
   if( endpoint==='/api' ){
      // ここに処理を記述してください。
      if(num%3===0&&num%5===0){
          console.log("FizzBuzz")
    }  else if(num%3===0){
        console.log("Fizz")
    }else if(num%5===0){
        console.log("Buzz")
    }else{
        console.log(num)
    }
   }
});
server.listen(8080); 
