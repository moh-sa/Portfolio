export type SuccessResponse<T> = {
  status: "success";
  payload: T;
};

export type FailureResponse = {
  status: "failure";
  error: {
    message: string;
    cause?: unknown;
  };
};

export type Response<T> = SuccessResponse<T> | FailureResponse;
