/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class AuthServiceService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Authorize
   * Client SDKで認証したトークンを用いてユーザーをDBに作成します。
   * @returns any
   * @throws ApiError
   */
  public authControllerCreate(): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "POST",
      url: "/authorize",
    });
  }
}
