const http=require('http')
const server=http.createServer((req,res)=>{
  if (req.url==='/') {
    res.end('Welcome to my home page');
    
  }
  if (req.url==='/about') {
    res.end('Here is out short history');
    
  }
  // else{
  //   res.end("<h1>Oops</h1>");}
  // console.log(req);
  // res.write('Welcome to my home page')
  // res.end()
});

server.listen(5000)