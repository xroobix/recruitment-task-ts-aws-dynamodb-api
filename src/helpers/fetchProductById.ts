import { HttpError, dynamoDb, tableName } from '../handlers';


const fetchProductById = async (productId: string) => {
    const output = await dynamoDb
      .get({
        TableName: tableName,
        Key: {
          productID: productId,
        },
      })
      .promise();
  
    if (!output.Item) {
      throw new HttpError(404, {
        error: 'Product not found',
      });
    }
    return output.Item;
  };

  export default fetchProductById;