/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class PingService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Ping
   * 動作確認用です。
   * @returns any
   * @throws ApiError
   */
  public appControllerGet(): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/ping",
    });
  }
}
