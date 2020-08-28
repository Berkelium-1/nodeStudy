const fs = require('fs');

function readFile(path, options = { encoding: null, flag: 'r' }) {
    return new Promise((resolve, reject) => {
        // 异步 读取文件
        fs.readFile(path, options, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

(async function() {
    let buf = await readFile('hello.txt');
    // console.log(buf.toString().split(' '));
    console.log(buf);

    let str = await readFile('hello.txt', 'utf8');
    console.log(str);

    console.log('程序执行完毕');
})();