var AWS = require('aws-sdk');
const fs = require('fs')
var s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'us-east-1',
});

module.exports = (app) => {
    app.post("/api/assets/upload", (req, res) => {
        console.log("UPLOADBODY", req.files)
        const file = fs.readFile(req.files.dogpictures.tempFilePath, function(err, data) {
            var params = {
                Key: req.files.dogpictures.name,
                Bucket: "dogslistproject2",
                Body: data,
                ACL: 'public-read'
            };
            s3.putObject(params, function put(err, data) {
                if (err) {
                    console.log("PUT ERROR", err, err.stack);
                    return;
                } else {
                    console.log("PUTSUCESS");
                }
                delete params.Body;
            }); 
        })
    })
}