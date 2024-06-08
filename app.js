const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// form으로 전송 받은 body를 해석해주는 패키지
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  ); // 서버로 부터 html을 응답 받음
});

app.use("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello from Express!</h1>"); // 서버로 부터 html을 응답 받음
});

app.listen(3000);
