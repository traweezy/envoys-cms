module.exports = ({ env }) =>  ({
 upload: {
     config: {
        provider: 'aws-s3',
        providerOptions: {
            accessKeyId: 'AKIAZ2M7JULJHLPY3VXX',
            secretAccessKey: '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',
            region: 'us-east-1',
            params: {
            Bucket: 'envoys',
            },
            logger: console // Only if you want to `stdout` logs
        }
     }
    }
})
