import { ZodError } from "zod";
import { type FailureResponse } from "~/types/QueriesResponse";

export class ResponseHandler {
  static handleNotFound({
    message,
    cause,
  }: {
    message: string;
    cause?: string;
  }): FailureResponse {
    return {
      status: "failure",
      error: {
        message: message,
        cause: cause ?? "",
      },
    };
  }

  static handleError({
    error,
    cause,
  }: {
    error: unknown;
    cause?: string;
  }): FailureResponse {
    if (error instanceof Error || error instanceof ZodError) {
      return {
        status: "failure",
        error: {
          message: error.message,
          cause: error.cause,
        },
      };
    } else {
      return {
        status: "failure",
        error: {
          message: "Unknown error occurred",
          cause: cause ?? "",
        },
      };
    }
  }
}
