const http = require("http");

// createServer = 서버를 생성하는 메서드
// 콜백함수를 인수로 받으며, 해당 함수에 1번째 인수는 requset, 2번째 인수는 response
const server = http.createServer((req, res) => {
  console.log(req);
});

// listen 프로세스가 실행되면 종료시키지 않고 계속 실행해 요청을 지속적으로 모니터링할 수 있는 메서드
server.listen(3000);

// 해당 js를 실행 후 브라우저를 통해 localhost:3000으로 접속하면 req가 터미널에 출력되는 것을 확인할 수 있다.
// (아직 서버에 어떤 html을 보내지 않았기 때문에, 브라우저에서는 아무 일도 일어나지 않는다.)
