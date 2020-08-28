const fs = require('fs');


function openFile(path, flags = 'r', mode = 0o666) {
    return new Promise((resolve, reject) => {
        // 打开文件
        fs.open(path, flags, mode, (err, fd) => {
            if (err) {
                reject(err);
            } else {
                // 返回的 fd 是文件描述符 （File descriptor）
                // 文件是在内存打开了的 但是我们肉眼看不见
                resolve(fd);
            }
        });
    });
}


(async function() {
    let fd = await openFile('hello.txt');
    console.log(fd); // 3

    let fd1 = await openFile('hello.txt');
    console.log(fd1); // 4

    // 获取文件信息
    fs.stat('hello.txt', (err, stats) => {
        if (err) {
            return console.error(err);
        }
        console.log(stats);
    });
})();