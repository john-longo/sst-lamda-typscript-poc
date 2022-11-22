import { Api, RDS, StackContext } from "@serverless-stack/resources";

export function AppStack({ stack }: StackContext) {
  const api = new Api(stack, "api", {
    routes: {
      "GET /": "../src/handlers/lambda.handler",
    },
  });
  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}