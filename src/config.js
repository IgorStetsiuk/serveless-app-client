const config = {
  
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-uploads-serverless-learning"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://jigqs99bgg.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_FgjoN9sMf",
    APP_CLIENT_ID: "34se20kheijh9toociiejc49c",
    IDENTITY_POOL_ID: "us-east-1:db668044-2db6-4fc6-bbf2-6e475e9ffa86"
  }
};



// const dev = {
//   STRIPE_KEY: "pk_test_v1amvR35uoCNduJfkqGB8RLD",
//   s3: {
//     REGION: "us-east-1",
//     BUCKET: ""
//   },
//   apiGateway: {
//     REGION: "us-east-1",
//     URL: "https://api.serverless-stack.seed-demo.club/dev"
//   },
//   cognito: {
//     REGION: "us-east-1",
//     USER_POOL_ID: "us-east-1_yKOQs2dWK",
//     APP_CLIENT_ID: "1h0r8s763vnqj4id6dvguanp8f",
//     IDENTITY_POOL_ID: "us-east-1:dedfd34a-9d7e-4bf2-a1dd-ef603bac2ecb"
//   }
// };
//
// const prod = {
//   STRIPE_KEY: "pk_test_v1amvR35uoCNduJfkqGB8RLD",
//   s3: {
//     REGION: "us-east-1",
//     BUCKET: "notes-app-2-api-prod-attachmentsbucket-1h5n5ttet1hy0"
//   },
//   apiGateway: {
//     REGION: "us-east-1",
//     URL: "https://api.serverless-stack.seed-demo.club/prod"
//   },
//   cognito: {
//     REGION: "us-east-1",
//     USER_POOL_ID: "us-east-1_TwYpMXIJH",
//     APP_CLIENT_ID: "6kfg0o7qo2i3ndk2ur906sc5fd",
//     IDENTITY_POOL_ID: "us-east-1:f4c754b4-24f0-4754-8596-30afedece1fc"
//   }
// };
//
// // Default to dev if not set
// const config = process.env.REACT_APP_STAGE === 'prod'
//   ? prod
//   : dev;
//
export default {
  // Add common config values here
  STRIPE_KEY: "pk_test_ZgCTWzLEXRnGbdTMLXXsQgzw0092IvdfOf",
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
