/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateOrderRequestBody } from "../models/CreateOrderRequestBody";
import type { Order } from "../models/Order";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class OrderServiceService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @param requestBody
   * @returns Order
   * @throws ApiError
   */
  public orderControllerCreate(
    requestBody: CreateOrderRequestBody
  ): CancelablePromise<Order> {
    return this.httpRequest.request({
      method: "POST",
      url: "/orders",
      body: requestBody,
      mediaType: "application/json",
    });
  }
}
