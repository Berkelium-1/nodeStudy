const http = require('http');

// 创建新的Server实例
let sever = http.createServer((request, response) => {
    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    // response.writeHead(200, { 'Content-Type': 'text/plain' });


    // console.log(request);
    // console.log(response);
    // 发送响应数据 "Hello World"
    // response.end('Hello node\n');

});

// 监听端口 3000
sever.listen(3000);

sever.on('request', (res) => {
    // console.log(res);
    console.log('收到请求');
});
// sever.on('response', (res) => {
//     console.log(res);
// });


console.log('http://localhost:3000  or  http://127.0.0.1:3000');
// console.log(sever);