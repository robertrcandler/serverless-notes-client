// export default {
//   STRIPE_KEY: "pk_test_51GrV04B7OcET4DUhXSXjBqY6JPqukuy5rDPCto5Mx9gY2jZQVT9wqMq08QORr5pqZIl4IIqXDgqWoYtsU2F3koS1009xYvPcVP",
//   MAX_ATTACHMENT_SIZE: 5000000,
//   s3: {
//     REGION: "us-east-2",
//     BUCKET: "notes-app-upload3"
//   },
//   apiGateway: {
//     REGION: "us-east-2",
//     URL: "https://i2mizfqhv9.execute-api.us-east-2.amazonaws.com/prod"
//   },
//   cognito: {
//     REGION: "us-east-2",
//     USER_POOL_ID: "us-east-2_o1uinKD6R",
//     APP_CLIENT_ID: "7q050s3lh7j7l6hnjb5sidredd",
//     IDENTITY_POOL_ID: "us-east-2:52301180-d45a-41ed-8df2-def3a3f45491"
//   }
// };

const dev = {
  STRIPE_KEY: "pk_test_51GrV04B7OcET4DUhXSXjBqY6JPqukuy5rDPCto5Mx9gY2jZQVT9wqMq08QORr5pqZIl4IIqXDgqWoYtsU2F3koS1009xYvPcVP",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1jgsrqjti4asb"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://9fqvphanc0.execute-api.us-east-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_AoRTvCNOv",
    APP_CLIENT_ID: "5c0kg4fcn4mi07k49bi35gsbhb",
    IDENTITY_POOL_ID: "us-east-2:265e0a28-9863-46fe-b9b5-5714158885fb"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_51GrV04B7OcET4DUhXSXjBqY6JPqukuy5rDPCto5Mx9gY2jZQVT9wqMq08QORr5pqZIl4IIqXDgqWoYtsU2F3koS1009xYvPcVP",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-pq18rmmp17gb"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://lrdiwew49b.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_FDBYdw7wn",
    APP_CLIENT_ID: "4d1hhdpcvmnb66anm5957f58f2",
    IDENTITY_POOL_ID: "us-east-2:db82f3ff-a9aa-4467-aeba-8572eb5df281"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};