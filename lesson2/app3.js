var async = require("async");

var concurrencyCount = 0;
var urls = [];
for (var i = 0; i<30; i++) {
    urls.push('http://datasource_'+i)
}
var fetchUrl = function (url, callback) {
    // delay的值在2000以内，是个整数
    var delay = parseInt((Math.random() * 10000000) % 2000, 10);
    concurrencyCount ++ ;
    console.log('现在的并发数是', concurrencyCount, '，正在抓取的是', url, '，耗时' + delay + '毫秒');
    setTimeout(() => {
        concurrencyCount -- ;
        callback(null, url + ' html content')
    }, delay);
}

async.mapLimit(urls, 5, (url, callback) => {
    fetchUrl(url, callback);
}, function (err, result) {
    console.log("final: ");
    console.log(result);
})