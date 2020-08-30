const fs = require('fs');

// fs.readdir(path[, options], callback)

fs.readdir('../', (err, files) => {
    if (err) {
        console.log(err);
    } else {
        console.log(files); // 返回数组
    }
});