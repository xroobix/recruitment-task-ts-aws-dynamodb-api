import { z } from 'zod';
import { HttpError, headers } from '../handlers';

const handleError = (error: unknown) => {
    if (error instanceof z.ZodError) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          errors: error.errors,
        }),
      };
    }
  
    if (error instanceof SyntaxError) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          error: `Invalid request body format: "${error.message}"`,
        }),
      };
    }
  
    if (error instanceof HttpError) {
      return {
        statusCode: error.statusCode,
        headers,
        body: error.message,
      };
    }
    throw error;
  };

export default handleError;