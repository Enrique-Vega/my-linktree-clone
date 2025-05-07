import awsExports from '@/aws-exports';
import { generateClient } from '@aws-amplify/api';

export const client = generateClient({
  // explicitly pass in your GraphQL API config from aws-exports.js
  config: {
    API: {
      GraphQL: {
        endpoint: awsExports.aws_appsync_graphqlEndpoint,
        region: awsExports.aws_appsync_region,
        defaultAuthMode: 'apiKey',
        apiKey: awsExports.aws_appsync_apiKey,
      },
    },
  },
});
