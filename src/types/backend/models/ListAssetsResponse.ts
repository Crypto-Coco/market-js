/* istanbul ignore file */
/* tslint:disable */

import type { ListAsset } from "./ListAsset";
import type { Pagination } from "./Pagination";

export type ListAssetsResponse = {
  assets: Array<ListAsset>;
  pagination: Pagination;
};
