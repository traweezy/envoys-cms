module.exports = ({ env }) => {
    console.log( {
   provider: 'aws-s3',
   providerOptions: {
     accessKeyId: env('AWS_ACCESS_KEY_ID'),
     secretAccessKey: env('AWS_ACCESS_SECRET'),
     region: env('AWS_REGION'),
     params: {
       Bucket: env('AWS_BUCKET_NAME'),
        StorageClass: env('AWS_S3_STORAGE_CLASSES') // Configure your Amazon S3 Storage Classes (including this to environment variable is not a must)
     },
     logger: console // Only if you want to `stdout` logs
   }
 })
   return  ({
 upload: {
   provider: 'aws-s3',
   providerOptions: {
     accessKeyId: env('AWS_ACCESS_KEY_ID'),
     secretAccessKey: env('AWS_ACCESS_SECRET'),
     region: env('AWS_REGION'),
     params: {
       Bucket: env('AWS_BUCKET_NAME'),
        StorageClass: env('AWS_S3_STORAGE_CLASSES') // Configure your Amazon S3 Storage Classes (including this to environment variable is not a must)
     },
     logger: console // Only if you want to `stdout` logs
   }
 }
})
};
