const path = require("path");
const express = require("express");
const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
  // __dirname : 현재경로, 그 다음 인수 하나 씩이 다음 경로 위치들을 나타냄
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
