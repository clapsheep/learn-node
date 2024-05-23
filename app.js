const http = require("http");

const server = http.createServer((req, res) => {
  // HTMl을 수동으로 서버에 입력해서 넣어주는 실습

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my node.js Server!</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
