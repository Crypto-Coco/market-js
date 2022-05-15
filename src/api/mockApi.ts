import "isomorphic-unfetch";
import _ from "lodash";
import * as QueryString from "query-string";
import { rinkebyCustomSchema } from "wyvern-schemas/dist/schemas/rinkeby/rinkebyCustom";
import { API_PATH, TEST_RINKEBY_NFT_ADDRESS } from "../constants";
import {
  AssetContractType,
  ExchangeMetadataForAsset,
  OpenSeaAsset,
  OpenSeaAssetBundle,
  OpenSeaAssetBundleQuery,
  OpenSeaAssetQuery,
  OpenSeaFungibleToken,
  OpenSeaFungibleTokenQuery,
  Order,
  OrderJSON,
  OrderQuery,
  OrderSide,
  WyvernSchemaName,
} from "../types";
import {
  assetBundleFromJSON,
  assetFromJSON,
  orderFromJSON,
  tokenFromJSON,
} from "../utils/utils";

const mockPaymentTokens: OpenSeaFungibleToken = {
  address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
  decimals: 10,
  name: "SampleFunsibleToken",
  symbol: "SFT",
};

const mockOpenSeaAsset: OpenSeaAsset = {
  assetContract: {
    address: TEST_RINKEBY_NFT_ADDRESS,
    buyerFeeBasisPoints: 0,
    description: rinkebyCustomSchema.description,
    devBuyerFeeBasisPoints: 0,
    devSellerFeeBasisPoints: 2,
    imageUrl: "https://sample.image",
    name: rinkebyCustomSchema.name,
    openseaBuyerFeeBasisPoints: 1,
    openseaSellerFeeBasisPoints: 2,
    schemaName: WyvernSchemaName.ENSShortNameAuction,
    sellerFeeBasisPoints: 2,
    tokenSymbol: "SAMP",
    type: AssetContractType.NonFungible,
  },
  collection: {
    createdDate: new Date(),
    description: "awesome collection!",
    devBuyerFeeBasisPoints: 1,
    devSellerFeeBasisPoints: 2,
    displayData: {
      data1: "data",
    },
    editors: ["0x53ceb15b76023fbec5bb39450214926f6aa77d2e"],
    featured: true,
    featuredImageUrl: "https://sample",
    hidden: false,
    imageUrl: "https://sample.image",
    largeImageUrl: "https://large.image",
    name: rinkebyCustomSchema.name,
    openseaBuyerFeeBasisPoints: 2,
    openseaSellerFeeBasisPoints: 2,
    paymentTokens: [mockPaymentTokens],
    slug: "sample",
    stats: [],
    traitStats: {},
  },
  backgroundColor: null,
  buyOrders: [],
  description: "good NFT",
  externalLink: "https://Hello",
  imagePreviewUrl:
    "https://lh3.googleusercontent.com/0_AE71GRW6iUL6aFqV2OLBBpZmyoTRQGSwOUFGrdfKqSbk3aeLMsHrtg7k_5vb4dl7QsoW_HSsES34cWbEaA4Dq1O6uKVC-8E41FVPo=w335",
  imageUrl:
    "https://lh3.googleusercontent.com/0_AE71GRW6iUL6aFqV2OLBBpZmyoTRQGSwOUFGrdfKqSbk3aeLMsHrtg7k_5vb4dl7QsoW_HSsES34cWbEaA4Dq1O6uKVC-8E41FVPo=w335",
  imageUrlOriginal:
    "https://lh3.googleusercontent.com/0_AE71GRW6iUL6aFqV2OLBBpZmyoTRQGSwOUFGrdfKqSbk3aeLMsHrtg7k_5vb4dl7QsoW_HSsES34cWbEaA4Dq1O6uKVC-8E41FVPo=w335",
  imageUrlThumbnail:
    "https://lh3.googleusercontent.com/0_AE71GRW6iUL6aFqV2OLBBpZmyoTRQGSwOUFGrdfKqSbk3aeLMsHrtg7k_5vb4dl7QsoW_HSsES34cWbEaA4Dq1O6uKVC-8E41FVPo=w335",
  isPresale: true,
  lastSale: null,
  name: "FAJC #4911",
  numSales: 3,
  openseaLink: "https://opensea.link/id/1",
  orders: [],
  owner: {
    user: {
      username: "ropital",
    },
    address: "0xe0ee13cd5a45e7fa140409edfc9ce17c7b11e6d2",
    profileImgUrl: "https://ropital",
    config: "abcde",
  },
  sellOrders: [],
  tokenAddress: TEST_RINKEBY_NFT_ADDRESS,
  tokenId:
    "12910348618308260923200348219926901280687058984330794534952861439530514639560",
  traits: [],
  transferFee: "3",
  transferFeePaymentToken: mockPaymentTokens,
};

export class MockAPI {
  private orders: Order[] = [];
  private assets: OpenSeaAsset[] = [mockOpenSeaAsset];
  private funsibleTokens: OpenSeaFungibleToken[] = [mockPaymentTokens];

  public pageSize = 20;
  public logger: (arg: string) => void;
  private apiKey: string | undefined;
  public readonly apiBaseUrl: string = "";

  constructor(logger?: (arg: string) => void) {
    this.logger = logger || ((arg: string) => arg);
  }

  /**
   * Send an order to the orderbook.
   * Throws when the order is invalid.
   * IN NEXT VERSION: change order input to Order type
   * @param order Order JSON to post to the orderbook
   * @param retries Number of times to retry if the service is unavailable for any reason
   */
  public async postOrder(order: OrderJSON, retries = 2): Promise<Order> {
    console.log("query", retries);
    const _order = orderFromJSON(order);
    this.orders.push(_order);
    return _order;
  }

  /**
   * Create a whitelist entry for an asset to prevent others from buying.
   * Buyers will have to have verified at least one of the emails
   * on an asset in order to buy.
   * This will throw a 403 if the given API key isn't allowed to create whitelist entries for this contract or asset.
   * @param tokenAddress Address of the asset's contract
   * @param tokenId The asset's token ID
   * @param email The email allowed to buy.
   */
  public async postAssetWhitelist(
    tokenAddress: string,
    tokenId: string | number,
    email: string
  ): Promise<boolean> {
    const json = await this.post<{ success: boolean }>(
      `${API_PATH}/asset/${tokenAddress}/${tokenId}/whitelist/`,
      {
        email,
      }
    );

    return !!json.success;
  }

  /**
   * Get which version of Wyvern exchange to use to create orders
   * Simply return null in case API doesn't give us a good response
   */
  public async getOrderCreateWyvernExchangeAddress(): Promise<string | null> {
    return "v2.2";
  }
  /**
   * Get an order from the orderbook, throwing if none is found.
   * @param query Query to use for getting orders. A subset of parameters
   *  on the `OrderJSON` type is supported
   */
  public async getOrder(query: OrderQuery): Promise<Order> {
    const order = this.orders.filter((order) => {
      return query.salt === order.salt.toString();
    })[0];

    if (!order) {
      throw new Error("Order not found");
    }

    return orderFromJSON(order);
  }

  /**
   * Get a list of orders from the orderbook, returning the page of orders
   *  and the count of total orders found.
   * @param query Query to use for getting orders. A subset of parameters
   *  on the `OrderJSON` type is supported
   * @param page Page number, defaults to 1. Can be overridden by
   * `limit` and `offset` attributes from OrderQuery
   */
  public async getOrders(
    query: OrderQuery = {},
    page = 1
  ): Promise<{ orders: Order[]; count: number }> {
    console.log("query", query, page);
    const orders = this.orders.map((order) => {
      return orderFromJSON(order);
    });
    return { orders, count: orders.length };
  }

  /**
   * Fetch an asset from the API, throwing if none is found
   * @param tokenAddress Address of the asset's contract
   * @param tokenId The asset's token ID, or null if ERC-20
   * @param retries Number of times to retry if the service is unavailable for any reason
   */
  public async getAsset(
    {
      tokenAddress,
      tokenId,
    }: {
      tokenAddress: string;
      tokenId: string | number | null;
    },
    retries = 1
  ): Promise<OpenSeaAsset> {
    const asset = this.assets.filter((asset) => {
      return asset.tokenId === tokenId && asset.tokenAddress === tokenAddress;
    })[0];

    asset.buyOrders = this.orders.filter((order) => {
      order.metadata = order.metadata as ExchangeMetadataForAsset;

      return (
        order.side === OrderSide.Buy &&
        order.metadata.asset.id === asset.tokenId &&
        order.metadata.asset.address === asset.tokenAddress
      );
    });

    asset.sellOrders = this.orders.filter((order) => {
      order.metadata = order.metadata as ExchangeMetadataForAsset;

      return (
        order.side === OrderSide.Sell &&
        order.metadata.asset.id === asset.tokenId &&
        order.metadata.asset.address === asset.tokenAddress
      );
    });

    if (!asset) {
      _throwOrContinue(new Error("Asset not found"), retries);
    }

    return asset;
  }

  /**
   * Fetch list of assets from the API, returning the page of assets and the count of total assets
   * @param query Query to use for getting orders. A subset of parameters on the `OpenSeaAssetJSON` type is supported
   */
  public async getAssets(query: OpenSeaAssetQuery = {}): Promise<{
    assets: OpenSeaAsset[];
    estimatedCount: number;
    next: string | undefined;
    previous: string | undefined;
  }> {
    console.log("query", query);
    const assets = this.assets.map((asset) => {
      return assetFromJSON(asset);
    });

    return {
      assets,
      next: "3",
      previous: "1",
      estimatedCount: assets.length,
    };
  }

  /**
   * Fetch list of fungible tokens from the API matching parameters
   * @param query Query to use for getting orders. A subset of parameters on the `OpenSeaAssetJSON` type is supported
   * @param page Page number, defaults to 1. Can be overridden by
   * `limit` and `offset` attributes from OpenSeaFungibleTokenQuery
   * @param retries Number of times to retry if the service is unavailable for any reason
   */
  public async getPaymentTokens(
    query: OpenSeaFungibleTokenQuery = {},
    page = 1,
    retries = 1
  ): Promise<{ tokens: OpenSeaFungibleToken[] }> {
    console.log(page, query.address);
    const tokens = this.funsibleTokens.filter((token) => {
      return token.address.toLowerCase() === query.address;
    });

    if (tokens.length === 0) {
      _throwOrContinue(new Error("Payment token not found"), retries);
    }

    return {
      tokens: tokens.map((t) => tokenFromJSON(t)),
    };
  }

  /**
   * Fetch a bundle from the API, return null if it isn't found
   * @param slug The bundle's identifier
   */
  public async getBundle({
    slug,
  }: {
    slug: string;
  }): Promise<OpenSeaAssetBundle | null> {
    const json = await this.get(`${API_PATH}/bundle/${slug}/`);

    return json ? assetBundleFromJSON(json) : null;
  }

  /**
   * Fetch list of bundles from the API, returning the page of bundles and the count of total bundles
   * @param query Query to use for getting orders. A subset of parameters on the `OpenSeaAssetBundleJSON` type is supported
   * @param page Page number, defaults to 1. Can be overridden by
   * `limit` and `offset` attributes from OpenSeaAssetBundleQuery
   */
  public async getBundles(
    query: OpenSeaAssetBundleQuery = {},
    page = 1
  ): Promise<{ bundles: OpenSeaAssetBundle[]; estimatedCount: number }> {
    const json = await this.get<{
      estimated_count: number;
      bundles: unknown[];
    }>(`${API_PATH}/bundles/`, {
      ...query,
      limit: this.pageSize,
      offset: (page - 1) * this.pageSize,
    });

    return {
      bundles: json.bundles.map((j) => assetBundleFromJSON(j)),
      estimatedCount: json.estimated_count,
    };
  }

  /**
   * Get JSON data from API, sending auth token in headers
   * @param apiPath Path to URL endpoint under API
   * @param query Data to send. Will be stringified using QueryString
   */
  public async get<T>(apiPath: string, query: object = {}): Promise<T> {
    const qs = QueryString.stringify(query);
    const url = `${apiPath}?${qs}`;

    const response = await this._fetch(url);
    return response.json();
  }

  /**
   * POST JSON data to API, sending auth token in headers
   * @param apiPath Path to URL endpoint under API
   * @param body Data to send. Will be JSON.stringified
   * @param opts RequestInit opts, similar to Fetch API. If it contains
   *  a body, it won't be stringified.
   */
  public async post<T>(
    apiPath: string,
    body?: object,
    opts: RequestInit = {}
  ): Promise<T> {
    const fetchOpts = {
      method: "POST",
      body: body ? JSON.stringify(body) : undefined,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      ...opts,
    };

    const response = await this._fetch(apiPath, fetchOpts);
    return response.json();
  }

  /**
   * PUT JSON data to API, sending auth token in headers
   * @param apiPath Path to URL endpoint under API
   * @param body Data to send
   * @param opts RequestInit opts, similar to Fetch API. If it contains
   *  a body, it won't be stringified.
   */
  public async put(apiPath: string, body: object, opts: RequestInit = {}) {
    return this.post(apiPath, body, {
      method: "PUT",
      ...opts,
    });
  }

  /**
   * Get from an API Endpoint, sending auth token in headers
   * @param apiPath Path to URL endpoint under API
   * @param opts RequestInit opts, similar to Fetch API
   */
  private async _fetch(apiPath: string, opts: RequestInit = {}) {
    const apiBase = this.apiBaseUrl;
    const apiKey = this.apiKey;
    const finalUrl = apiBase + apiPath;
    const finalOpts = {
      ...opts,
      headers: {
        ...(apiKey ? { "X-API-KEY": apiKey } : {}),
        ...(opts.headers || {}),
      },
    };

    this.logger(
      `Sending request: ${finalUrl} ${JSON.stringify(finalOpts).substr(
        0,
        100
      )}...`
    );

    return fetch(finalUrl, finalOpts).then(async (res) =>
      this._handleApiResponse(res)
    );
  }

  private async _handleApiResponse(response: Response) {
    if (response.ok) {
      this.logger(`Got success: ${response.status}`);
      return response;
    }

    let result;
    let errorMessage;
    try {
      result = await response.text();
      result = JSON.parse(result);
    } catch {
      // Result will be undefined or text
    }

    this.logger(`Got error ${response.status}: ${JSON.stringify(result)}`);

    switch (response.status) {
      case 400:
        errorMessage =
          result && result.errors
            ? result.errors.join(", ")
            : `Invalid request: ${JSON.stringify(result)}`;
        break;
      case 401:
      case 403:
        errorMessage = `Unauthorized. Full message was '${JSON.stringify(
          result
        )}'`;
        break;
      case 404:
        errorMessage = `Not found. Full message was '${JSON.stringify(
          result
        )}'`;
        break;
      case 500:
        errorMessage = `Internal server error. OpenSea has been alerted, but if the problem persists please contact us via Discord: https://discord.gg/ga8EJbv - full message was ${JSON.stringify(
          result
        )}`;
        break;
      case 503:
        errorMessage = `Service unavailable. Please try again in a few minutes. If the problem persists please contact us via Discord: https://discord.gg/ga8EJbv - full message was ${JSON.stringify(
          result
        )}`;
        break;
      default:
        errorMessage = `Message: ${JSON.stringify(result)}`;
        break;
    }

    throw new Error(`API Error ${response.status}: ${errorMessage}`);
  }
}

function _throwOrContinue(error: unknown, retries: number) {
  const isUnavailable =
    error instanceof Error &&
    !!error.message &&
    (error.message.includes("503") || error.message.includes("429"));

  if (retries <= 0 || !isUnavailable) {
    throw error;
  }
}
