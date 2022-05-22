/* istanbul ignore file */
/* tslint:disable */

import type { AssetContract } from "./AssetContract";
import type { Pagination } from "./Pagination";

export type ListAssetContractsResponse = {
  assetContracts: Array<AssetContract>;
  pagination: Pagination;
};
