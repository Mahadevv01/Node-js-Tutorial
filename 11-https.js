const http=require('http')
 const server=http.createServer((req,res) =>{
  if(req.url==='/'){
    res.end('welcome to our home page')
  }
  if(req.url==='/about'){
    res.end('here is the short history')
  }
  res.end(`
  <h1>oops!</h1>
  <p>we cant seem to find the page you are looking for</p>
  <a href="/">back home</a>
  `)
  // console.log(req)
  res.write('welcome to our home page')
  res.end()
 })

 server.listen(5000)