var AWS = require('aws-sdk');
var s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'us-east-1',
});

module.exports = (app) => {
    app.post("/api/assets/upload", (req, res) => {
        var params = {
            Key: 'hello',
            Bucket: "dogslistproject2",
            Body: new Buffer('Hello, node.js'),
        };
        s3.putObject(params, function put(err, data) {
            if (err) {
                console.log(err, err.stack);
                return;
            } else {
                console.log(data);
            }
            delete params.Body;
            s3.getObject(params, function put(err, data) {
                if (err) console.log(err, err.stack);
                else console.log(data);
                console.log(data.Body.toString());
            });
        });
    })
}