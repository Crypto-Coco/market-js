/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuyOrderRequestBody } from "../models/BuyOrderRequestBody";
import type { CreateOrderRequestBody } from "../models/CreateOrderRequestBody";
import type { GetBuyOrderListResponse } from "../models/GetBuyOrderListResponse";
import type { GetOrderResponse } from "../models/GetOrderResponse";
import type { Order } from "../models/Order";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class OrderServiceService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * オーダーを取得
   * @param salt
   * @returns GetOrderResponse
   * @throws ApiError
   */
  public orderControllerGet(salt: string): CancelablePromise<GetOrderResponse> {
    return this.httpRequest.request({
      method: "GET",
      url: "/orders/{orderId}",
      query: {
        salt: salt,
      },
    });
  }

  /**
   * @param orderId
   * @param requestBody
   * @returns Order
   * @throws ApiError
   */
  public orderControllerBuy(
    orderId: string,
    requestBody: BuyOrderRequestBody
  ): CancelablePromise<Order> {
    return this.httpRequest.request({
      method: "POST",
      url: "/orders/{orderId}",
      path: {
        orderId: orderId,
      },
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * 売りオーダー一覧を取得
   * @param assetId
   * @returns GetBuyOrderListResponse
   * @throws ApiError
   */
  public orderControllerGetSellOrderList(
    assetId: string
  ): CancelablePromise<GetBuyOrderListResponse> {
    return this.httpRequest.request({
      method: "GET",
      url: "/orders/byAssetId/{assetId}",
      query: {
        assetId: assetId,
      },
    });
  }

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
