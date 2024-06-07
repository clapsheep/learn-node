const http = require("http");
const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("In the middleware");
  next(); // 다음 미들웨어로 요청이 이동하려면 해당 next 함수를 실행해야한다.
});
app.use((req, res, next) => {
  console.log("In another middleware");
});
const server = http.createServer(app);

server.listen(3000);
