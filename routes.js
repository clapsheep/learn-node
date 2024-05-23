const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  // url이 '/'일 때 반환할 HTML
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");

    // form 태그가 submit이 되면 action의 경로로 이동하며 POST 메서드를 사용해 제출함.
    res.write(
      "<body><form action='/message' method='POST'><input name='message' type='text'><button type='submit'>Send</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }

  // /message 경로에서 method로 POST를 받았을 때 생겨나는 일.
  if (url === "/message" && method === "POST") {
    const body = [];

    // node.js가 stream으로 요청을 처리할 때, buffer를 할당해 chunk를 처리하는 방법

    // data 이벤트가 발생할 때, chunk를 처리함,
    req.on("data", (chunk) => {
      console.log("chunk:", chunk);
      body.push(chunk);
    });

    // 그 후 새로운 Buffer를 생성해 정의된 body를 담음
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      // 파일생성
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        // 경로 이동
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my node.js Server!</h1></body>");
  res.write("</html>");
  res.end();
};
// module.exports = requestHandler;

// module.exports = {
//   handler: requestHandler,
//   someText: "blablabla",
// };

// module.exports.handler = requestHandler;
// module.exports.someText = "blablabla";

exports.handler = requestHandler;
exports.someText = "blablabal";
