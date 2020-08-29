const fs = require("fs");

function writeFile(file, data, options = { encoding: 'utf8', mode: 0o666, flag: 'w' }) {
    return new Promise((resolve, reject) => {
        // 文件写入
        fs.writeFile(file, data, options, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

(async function() {
    let num = await writeFile('write.txt', 520); // 覆盖文字
    console.log(num);

    let str = await writeFile('write.txt', 'abc', { flag: 'a' }); // 添加文字
    // write==>w  read==>r  append==>a
    console.log(str);

    console.log('程序执行完毕');
})();