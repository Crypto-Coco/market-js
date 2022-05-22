/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateUserRequestBody } from "../models/CreateUserRequestBody";
import type { CreateUserResponse } from "../models/CreateUserResponse";
import type { GetUserResponse } from "../models/GetUserResponse";
import type { ListUsersResponse } from "../models/ListUsersResponse";
import type { UpdateUserRequestBody } from "../models/UpdateUserRequestBody";
import type { UpdateUserResponse } from "../models/UpdateUserResponse";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class UserServiceService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * ユーザーの単体取得
   * @param userId
   * @returns GetUserResponse
   * @throws ApiError
   */
  public userControllerGet(userId: string): CancelablePromise<GetUserResponse> {
    return this.httpRequest.request({
      method: "GET",
      url: "/users/{userId}",
      path: {
        userId: userId,
      },
    });
  }

  /**
   * ユーザーの情報更新
   * @param userId
   * @param requestBody
   * @returns UpdateUserResponse
   * @throws ApiError
   */
  public userControllerUpdate(
    userId: string,
    requestBody: UpdateUserRequestBody
  ): CancelablePromise<UpdateUserResponse> {
    return this.httpRequest.request({
      method: "PATCH",
      url: "/users/{userId}",
      path: {
        userId: userId,
      },
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * ユーザーの削除
   * @param userId
   * @returns void
   * @throws ApiError
   */
  public userControllerDeactivate(userId: string): CancelablePromise<void> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/users/{userId}",
      path: {
        userId: userId,
      },
    });
  }

  /**
   * ユーザーの一覧取得
   * @param page ページネーション: ページ番号
   * @param perPage ページネーション: 1ページのデータ数
   * @returns ListUsersResponse
   * @throws ApiError
   */
  public userControllerList(
    page: number = 1,
    perPage: number = 10
  ): CancelablePromise<ListUsersResponse> {
    return this.httpRequest.request({
      method: "GET",
      url: "/users",
      query: {
        page: page,
        perPage: perPage,
      },
    });
  }

  /**
   * ユーザーの新規作成
   * @param requestBody
   * @returns CreateUserResponse
   * @throws ApiError
   */
  public userControllerCreate(
    requestBody: CreateUserRequestBody
  ): CancelablePromise<CreateUserResponse> {
    return this.httpRequest.request({
      method: "POST",
      url: "/users",
      body: requestBody,
      mediaType: "application/json",
    });
  }
}
