/* istanbul ignore file */
/* tslint:disable */

export type UpdateCollectionRequestBody = {
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
  categoryId: number;
};
