/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from "./core/BaseHttpRequest";
import type { OpenAPIConfig } from "./core/OpenAPI";
import { FetchHttpRequest } from "./core/FetchHttpRequest";

import { AssetContractServiceService } from "./services/AssetContractServiceService";
import { AssetServiceService } from "./services/AssetServiceService";
import { AuthServiceService } from "./services/AuthServiceService";
import { FunsibleTokenControllerService } from "./services/FunsibleTokenControllerService";
import { OrderServiceService } from "./services/OrderServiceService";
import { PingService } from "./services/PingService";
import { UserServiceService } from "./services/UserServiceService";

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class MarketApi {
  public readonly assetContractService: AssetContractServiceService;
  public readonly assetService: AssetServiceService;
  public readonly authService: AuthServiceService;
  public readonly funsibleTokenController: FunsibleTokenControllerService;
  public readonly orderService: OrderServiceService;
  public readonly ping: PingService;
  public readonly userService: UserServiceService;

  public readonly request: BaseHttpRequest;

  constructor(
    config?: Partial<OpenAPIConfig>,
    HttpRequest: HttpRequestConstructor = FetchHttpRequest
  ) {
    this.request = new HttpRequest({
      BASE: config?.BASE ?? "",
      VERSION: config?.VERSION ?? "1.0",
      WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
      CREDENTIALS: config?.CREDENTIALS ?? "include",
      TOKEN: config?.TOKEN,
      USERNAME: config?.USERNAME,
      PASSWORD: config?.PASSWORD,
      HEADERS: config?.HEADERS,
      ENCODE_PATH: config?.ENCODE_PATH,
    });

    this.assetContractService = new AssetContractServiceService(this.request);
    this.assetService = new AssetServiceService(this.request);
    this.authService = new AuthServiceService(this.request);
    this.funsibleTokenController = new FunsibleTokenControllerService(
      this.request
    );
    this.orderService = new OrderServiceService(this.request);
    this.ping = new PingService(this.request);
    this.userService = new UserServiceService(this.request);
  }
}
