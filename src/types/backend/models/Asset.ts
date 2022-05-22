/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AssetContract } from "./AssetContract";
import type { Collection } from "./Collection";

export type Asset = {
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
  tokenId: string;
  /**
   * 名前
   */
  name: string;
  /**
   * 作成者アドレス
   */
  creatorAddress: string;
  /**
   * メタデータURL
   */
  metadataUrl: string;
  /**
   * 詳細
   */
  description: string;
  /**
   * 背景色
   */
  backgroundColor: string;
  /**
   * プリセールフラグ
   */
  isPresale: boolean;
  /**
   * アセット画像URL
   */
  imageUrl: string;
  /**
   * プレビュー画像URL
   */
  imagePreviewUrl: string;
  /**
   * オリジナル画像URL
   */
  imageUrlOriginal: string;
  /**
   * サムネイルURL
   */
  thumbnailUrl: string;
  /**
   * 外部リンク
   */
  externalLink: string;
  /**
   * トレイト
   */
  traits: any;
  /**
   * セール回数
   */
  numSales: number;
  /**
   * ラストセールUnixTime
   */
  lastSale: number;
  /**
   * トランスファー手数料
   */
  transferFee: number;
  /**
   * ピックアップフラグ
   */
  isPickup: boolean;
  /**
   * アセットのコントラクト
   */
  assetContract: AssetContract;
  /**
   * コレクション
   */
  collection: Collection;
};
