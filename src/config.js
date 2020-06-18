export default {
  STRIPE_KEY: "pk_test_51GrV04B7OcET4DUhXSXjBqY6JPqukuy5rDPCto5Mx9gY2jZQVT9wqMq08QORr5pqZIl4IIqXDgqWoYtsU2F3koS1009xYvPcVP",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-upload3"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://i2mizfqhv9.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_o1uinKD6R",
    APP_CLIENT_ID: "7q050s3lh7j7l6hnjb5sidredd",
    IDENTITY_POOL_ID: "us-east-2:52301180-d45a-41ed-8df2-def3a3f45491"
  }
};