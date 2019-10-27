var qiniu = require("qiniu");
var path = require('path')
var fs = require('fs')

var accessKey = 'RsABpioMXaTwmHmq1KKHfhyJpAlb0Xq4rFA0h7YV';
var secretKey = '3fvctY6SFGDPgMslKLGFDm0OmEspIZwPlfSJFeu5';
var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
var key = 'test.txt'
// config.zone = new qiniu.zone.Zone_z0;
let bucket = 'devchan';
var options = {
    scope: bucket,
};
var putPolicy = new qiniu.rs.PutPolicy(options);
var uploadToken = putPolicy.uploadToken(mac);
// console.log(uploadToken) 
var config = new qiniu.conf.Config();
// 空间对应的机房
config.zone = qiniu.zone.Zone_z0;


var localFile = "./test.txt";
var formUploader = new qiniu.form_up.FormUploader(config);
var putExtra = new qiniu.form_up.PutExtra();

// 文件上传
formUploader.putFile(uploadToken, key, localFile, putExtra, function (respErr, respBody, respInfo) {
    if (respErr) {
        throw respErr;
    }
    if (respInfo.statusCode == 200) {
        console.log(respBody);
    } else {
        console.log(respInfo.statusCode);
        console.log(respBody);
    }
});

