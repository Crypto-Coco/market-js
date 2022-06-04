/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateOrderRequestBody = {
  /**
   * オーダー作成者
   */
  makerAddress: string;
  /**
   * オーダー受取人
   */
  takerAddress: string;
  makerRelayerFee: string;
  takerRelayerFee: string;
  makerProtocolFee: string;
  takerProtocolFee: string;
  feeRecipient: string;
  feeMethod: number;
  side: number;
  saleKind: number;
  target: string;
  howToCall: number;
  calldata: string;
  replacementPattern: string;
  staticTarget: string;
  staticExtradata: string;
  /**
   * 支払いに用いるトークンのアドレス
   */
  paymentTokenAddress: string;
  /**
   * アセット価格
   */
  basePrice: string;
  extra: string;
  listingTime: number;
  expirationTime: number;
  salt: string;
  makerReferrerFee: string;
  englishAuctionReservePrice?: string;
  waitingForBestCounterOrder: boolean;
  quantity: number;
  metadata: any;
  nonce?: number;
  v?: number;
  r?: string;
  s?: string;
  exchange: string;
};
