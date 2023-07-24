import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import AWS from 'aws-sdk';
import { v4 } from 'uuid';
import { z } from 'zod';
import fetchProductById from './helpers/fetchProductById';
import handleError from './helpers/handleErrors';

export const dynamoDb = new AWS.DynamoDB.DocumentClient();
export const tableName = 'ProductsTable';
export const headers = {
  'content-type': 'application/json',
};
export class HttpError extends Error {
  constructor(public statusCode: number, body: Record<string, unknown> = {}) {
    super(JSON.stringify(body));
  }
}

const schema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  price: z.number().min(1),
  available: z.boolean(),
});

export const createProduct = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const reqBody = JSON.parse(event.body as string);

    await schema.parseAsync(reqBody);

    const product = {
      ...reqBody,
      productID: v4(),
    };

    await dynamoDb
      .put({
        TableName: tableName,
        Item: product,
      })
      .promise();

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(product),
    };
  } catch (error) {
    return handleError(error);
  }
};

export const getProduct = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const product = await fetchProductById(
      event.pathParameters?.productId as string
    );

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(product),
    };
  } catch (error) {
    return handleError(error);
  }
};

export const updateProduct = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const productId = event.pathParameters?.productId as string;

    await fetchProductById(productId);

    const reqBody = JSON.parse(event.body as string);

    await schema.parseAsync(reqBody);

    const product = {
      ...reqBody,
      productID: productId,
    };

    await dynamoDb
      .put({
        TableName: tableName,
        Item: product,
      })
      .promise();

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(product),
    };
  } catch (error) {
    return handleError(error);
  }
};

export const deleteProduct = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const productId = event.pathParameters?.productId as string;
    await fetchProductById(productId);

    await dynamoDb
      .delete({
        TableName: tableName,
        Key: {
          productID: productId,
        },
      })
      .promise();

    return {
      statusCode: 204,
      body: '',
    };
  } catch (error) {
    return handleError(error);
  }
};

export const getProducts = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const output = await dynamoDb
    .scan({
      TableName: tableName,
    })
    .promise();

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify(output.Items),
  };
};
