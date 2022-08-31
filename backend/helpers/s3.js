const S3 = require('aws-sdk/clients/s3');

const region = process.env.AWS_REGION 
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_KEY

const storage = new S3(
  {
    region,
    accessKeyId,
    secretAccessKey
  }
);

const getBucket = ()=>{
  return storage.listBuckets().promise();
}

const uploadToBucket = (file,keyName)=>{
  let data = file.split(';base64,');
  let ContentType = data[0].split('data:')[1];
  let Archivo = new (Buffer.from)(data[1], 'base64');
  const bucketName=process.env.BUCKET_NAME
  const params = {
    Bucket:bucketName,
    Key:keyName,
    Body:Archivo,
    ContentType:ContentType,
    ACL: 'public-read',
  }  
  return storage.upload(params).promise();
} 


module.exports = {
  getBucket,
  uploadToBucket,
}
