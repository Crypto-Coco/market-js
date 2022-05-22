/* istanbul ignore file */
/* tslint:disable */

export type Collection = {
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
  slug: string;
  name: string;
  description: string;
  imageUrl: string;
  largeImageUrl: string;
  twitterUrl: string;
  discordUrl: string;
  instagramUrl: string;
  websiteUrl: string;
  hidden: boolean;
  payoutsAddress: string;
  buyerFeeBasisPoints: number;
  sellerFeeBasisPoints: number;
  devBuyerFeeBasisPoints: number;
  devSellerFeeBasisPoints: number;
  chainId: number;
  assets: Array<string>;
};
