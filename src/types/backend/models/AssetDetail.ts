/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AssetContract } from "./AssetContract";
import type { Collection } from "./Collection";
import type { Order } from "./Order";
import type { OwnerHistory } from "./OwnerHistory";
import type { User } from "./User";

export type AssetDetail = {
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
   * 詳細
   */
  description: string;
  /**
   * 背景色
   */
  backgroundColor: string;
  /**
   * アセット画像URL
   */
  imageUrl: string;
  /**
   * 外部リンク
   */
  externalLink: string;
  /**
   * トレイト
   */
  traits: any;
  /**
   * アセットのコントラクト
   */
  assetContract: AssetContract;
  /**
   * 現在の売り注文
   */
  sellOrder?: Order;
  /**
   * コレクション
   */
  collection: Collection;
  /**
   * クリエーター
   */
  creator: User;
  /**
   * 現在のオーナー
   */
  currentOwnerHistory: OwnerHistory;
  /**
   * オーナー一覧
   */
  ownerHistories: Array<OwnerHistory>;
};
