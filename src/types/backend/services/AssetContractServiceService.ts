/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateAssetContractRequestBody } from "../models/CreateAssetContractRequestBody";
import type { CreateAssetContractResponse } from "../models/CreateAssetContractResponse";
import type { GetAssetContractResponse } from "../models/GetAssetContractResponse";
import type { ListAssetContractsResponse } from "../models/ListAssetContractsResponse";
import type { UpdateAssetContractRequestBody } from "../models/UpdateAssetContractRequestBody";
import type { UpdateAssetContractResponse } from "../models/UpdateAssetContractResponse";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class AssetContractServiceService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * アセットコントラクトの単体取得
   * @param assetContractId
   * @returns GetAssetContractResponse
   * @throws ApiError
   */
  public assetContractControllerGet(
    assetContractId: string
  ): CancelablePromise<GetAssetContractResponse> {
    return this.httpRequest.request({
      method: "GET",
      url: "/asset_contracts/{assetContractId}",
      path: {
        assetContractId: assetContractId,
      },
    });
  }

  /**
   * アセットコントラクトの情報更新
   * @param assetContractId
   * @param requestBody
   * @returns UpdateAssetContractResponse
   * @throws ApiError
   */
  public assetContractControllerUpdate(
    assetContractId: string,
    requestBody: UpdateAssetContractRequestBody
  ): CancelablePromise<UpdateAssetContractResponse> {
    return this.httpRequest.request({
      method: "PATCH",
      url: "/asset_contracts/{assetContractId}",
      path: {
        assetContractId: assetContractId,
      },
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * アセットコントラクトの削除
   * @param assetContractId
   * @returns void
   * @throws ApiError
   */
  public assetContractControllerDeactivate(
    assetContractId: string
  ): CancelablePromise<void> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/asset_contracts/{assetContractId}",
      path: {
        assetContractId: assetContractId,
      },
    });
  }

  /**
   * アセットコントラクトの一覧取得
   * @param page ページネーション: ページ番号
   * @param perPage ページネーション: 1ページのデータ数
   * @returns ListAssetContractsResponse
   * @throws ApiError
   */
  public assetContractControllerList(
    page: number = 1,
    perPage: number = 10
  ): CancelablePromise<ListAssetContractsResponse> {
    return this.httpRequest.request({
      method: "GET",
      url: "/asset_contracts",
      query: {
        page: page,
        perPage: perPage,
      },
    });
  }

  /**
   * アセットコントラクトの新規作成
   * @param requestBody
   * @returns CreateAssetContractResponse
   * @throws ApiError
   */
  public assetContractControllerCreate(
    requestBody: CreateAssetContractRequestBody
  ): CancelablePromise<CreateAssetContractResponse> {
    return this.httpRequest.request({
      method: "POST",
      url: "/asset_contracts",
      body: requestBody,
      mediaType: "application/json",
    });
  }
}
