/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListFunsibleTokensResponse } from "../models/ListFunsibleTokensResponse";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class FunsibleTokenControllerService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * FT取得
   * @param page ページネーション: ページ番号
   * @param perPage ページネーション: 1ページのデータ数
   * @param address
   * @returns ListFunsibleTokensResponse
   * @throws ApiError
   */
  public funsibleTokenControllerList(
    page: number = 1,
    perPage: number = 10,
    address?: string
  ): CancelablePromise<ListFunsibleTokensResponse> {
    return this.httpRequest.request({
      method: "GET",
      url: "/funsible-tokens",
      query: {
        page: page,
        perPage: perPage,
        address: address,
      },
    });
  }
}
