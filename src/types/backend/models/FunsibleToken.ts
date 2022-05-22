/* istanbul ignore file */
/* tslint:disable */

export type FunsibleToken = {
  /**
   * データ作成日時を表すtimestamp
   */
  createdAt: number;
  /**
   * データ更新日時を表すtimestamp
   */
  updatedAt: number;
  id: string;
  name: string;
  symbol: string;
  decimals: number;
  address: string;
  imageUrl: string;
  ethPrice: string;
  usdPrice: string;
};
