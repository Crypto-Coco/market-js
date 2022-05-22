/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateAssetRequestBody } from "../models/CreateAssetRequestBody";
import type { CreateAssetResponse } from "../models/CreateAssetResponse";
import type { GetAssetResponse } from "../models/GetAssetResponse";
import type { ListAssetsResponse } from "../models/ListAssetsResponse";
import type { UpdateAssetRequestBody } from "../models/UpdateAssetRequestBody";
import type { UpdateAssetResponse } from "../models/UpdateAssetResponse";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class AssetServiceService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * アセットの単体取得
   * @param assetId
   * @returns GetAssetResponse
   * @throws ApiError
   */
  public assetControllerGetById(
    assetId: string
  ): CancelablePromise<GetAssetResponse> {
    return this.httpRequest.request({
      method: "GET",
      url: "/assets/{assetId}",
      path: {
        assetId: assetId,
      },
    });
  }

  /**
   * アセットの情報更新
   * @param assetId
   * @param requestBody
   * @returns UpdateAssetResponse
   * @throws ApiError
   */
  public assetControllerUpdate(
    assetId: string,
    requestBody: UpdateAssetRequestBody
  ): CancelablePromise<UpdateAssetResponse> {
    return this.httpRequest.request({
      method: "PATCH",
      url: "/assets/{assetId}",
      path: {
        assetId: assetId,
      },
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * アセットの削除
   * @param assetId
   * @returns void
   * @throws ApiError
   */
  public assetControllerDeactivate(assetId: string): CancelablePromise<void> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/assets/{assetId}",
      path: {
        assetId: assetId,
      },
    });
  }

  /**
   * アセットの単体取得
   * @param tokenAddress
   * @param tokenId
   * @returns GetAssetResponse
   * @throws ApiError
   */
  public assetControllerGet(
    tokenAddress: string,
    tokenId: string
  ): CancelablePromise<GetAssetResponse> {
    return this.httpRequest.request({
      method: "GET",
      url: "/assets/{tokenAddress}/{tokenId}",
      path: {
        tokenAddress: tokenAddress,
        tokenId: tokenId,
      },
    });
  }

  /**
   * アセットの一覧取得
   * @param page ページネーション: ページ番号
   * @param perPage ページネーション: 1ページのデータ数
   * @returns ListAssetsResponse
   * @throws ApiError
   */
  public assetControllerList(
    page: number = 1,
    perPage: number = 10
  ): CancelablePromise<ListAssetsResponse> {
    return this.httpRequest.request({
      method: "GET",
      url: "/assets",
      query: {
        page: page,
        perPage: perPage,
      },
    });
  }

  /**
   * アセットの新規作成
   * @param requestBody
   * @returns CreateAssetResponse
   * @throws ApiError
   */
  public assetControllerCreate(
    requestBody: CreateAssetRequestBody
  ): CancelablePromise<CreateAssetResponse> {
    return this.httpRequest.request({
      method: "POST",
      url: "/assets",
      body: requestBody,
      mediaType: "application/json",
    });
  }
}
