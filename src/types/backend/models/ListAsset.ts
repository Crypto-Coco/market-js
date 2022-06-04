/* istanbul ignore file */
/* tslint:disable */

import type { AssetContract } from "./AssetContract";
import type { Order } from "./Order";

export type ListAsset = {
  /**
   * データ作成日時を表すtimestamp
   */
  createdAt: number;
  /**
   * データ更新日時を表すtimestamp
   */
  updatedAt: number;
  /**
   * UUID
   */
  id: string;
  /**
   * トークンID
   */
  tokenId: number;
  /**
   * 名前
   */
  name: string;
  /**
   * 背景色
   */
  backgroundColor: string;
  /**
   * アセット画像URL
   */
  imageUrl: string;
  /**
   * アセットのコントラクト
   */
  assetContract: AssetContract;
  /**
   * 売り注文
   */
  sellOrder: Order;
};
