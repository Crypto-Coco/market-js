/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateCollectionRequestBody } from "../models/CreateCollectionRequestBody";
import type { CreateCollectionResponse } from "../models/CreateCollectionResponse";
import type { GetCollectionResponse } from "../models/GetCollectionResponse";
import type { ListCollectionsResponse } from "../models/ListCollectionsResponse";
import type { UpdateCollectionRequestBody } from "../models/UpdateCollectionRequestBody";
import type { UpdateCollectionResponse } from "../models/UpdateCollectionResponse";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class CollectionServiceService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * コレクションの単体取得
   * @param collectionId
   * @returns GetCollectionResponse
   * @throws ApiError
   */
  public collectionControllerGet(
    collectionId: string
  ): CancelablePromise<GetCollectionResponse> {
    return this.httpRequest.request({
      method: "GET",
      url: "/collections/{collectionId}",
      path: {
        collectionId: collectionId,
      },
    });
  }

  /**
   * コレクションの情報更新
   * @param collectionId
   * @param requestBody
   * @returns UpdateCollectionResponse
   * @throws ApiError
   */
  public collectionControllerUpdate(
    collectionId: string,
    requestBody: UpdateCollectionRequestBody
  ): CancelablePromise<UpdateCollectionResponse> {
    return this.httpRequest.request({
      method: "PATCH",
      url: "/collections/{collectionId}",
      path: {
        collectionId: collectionId,
      },
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * コレクションの削除
   * @param collectionId
   * @returns void
   * @throws ApiError
   */
  public collectionControllerDeactivate(
    collectionId: string
  ): CancelablePromise<void> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/collections/{collectionId}",
      path: {
        collectionId: collectionId,
      },
    });
  }

  /**
   * コレクションの一覧取得
   * @param page ページネーション: ページ番号
   * @param perPage ページネーション: 1ページのデータ数
   * @param categoryId
   * @returns ListCollectionsResponse
   * @throws ApiError
   */
  public collectionControllerList(
    page: number = 1,
    perPage: number = 10,
    categoryId?: string
  ): CancelablePromise<ListCollectionsResponse> {
    return this.httpRequest.request({
      method: "GET",
      url: "/collections",
      query: {
        page: page,
        perPage: perPage,
        categoryId: categoryId,
      },
    });
  }

  /**
   * コレクションの新規作成
   * @param requestBody
   * @returns CreateCollectionResponse
   * @throws ApiError
   */
  public collectionControllerCreate(
    requestBody: CreateCollectionRequestBody
  ): CancelablePromise<CreateCollectionResponse> {
    return this.httpRequest.request({
      method: "POST",
      url: "/collections",
      body: requestBody,
      mediaType: "application/json",
    });
  }
}
