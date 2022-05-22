/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateAssetContractRequestBody = {
  /**
   * コントラクト名
   */
  name: string;
  /**
   * コントラクトアドレス
   */
  address: string;
  /**
   * スキーマ名
   */
  schemaName: string;
  /**
   * Seller Fee Basis Point
   */
  sellerFeeBasisPoints: number;
  /**
   * Buyer Fee Basis Points
   */
  buyerFeeBasisPoints: number;
  /**
   * 詳細
   */
  description: string;
  /**
   * トークンシンボル
   */
  tokenSymbol: string;
  /**
   * 画像URL
   */
  imageUrl: string;
  /**
   * Stat
   */
  stats: any;
  /**
   * Trait
   */
  traits: any;
  /**
   * Website Url
   */
  websiteUrl: string;
  /**
   * marketSellerFeeBasisPoints
   */
  marketSellerFeeBasisPoints: number;
  /**
   * marketBuyerFeeBasisPoints
   */
  marketBuyerFeeBasisPoints: number;
  /**
   * devSellerFeeBasisPoints
   */
  devSellerFeeBasisPoints: number;
  /**
   * devBuyerFeeBasisPoints
   */
  devBuyerFeeBasisPoints: number;
};
