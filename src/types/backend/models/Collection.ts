/* istanbul ignore file */
/* tslint:disable */

import type { SimpleCategory } from "./SimpleCategory";

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
  twitterUrl?: string;
  discordUrl?: string;
  instagramUrl?: string;
  websiteUrl?: string;
  hidden: boolean;
  payoutAddress: string;
  buyerFeeBasisPoints: number;
  sellerFeeBasisPoints: number;
  devBuyerFeeBasisPoints: number;
  devSellerFeeBasisPoints: number;
  chainId: number;
  category: SimpleCategory;
  assets: Array<string>;
};