/* istanbul ignore file */
/* tslint:disable */

import type { Asset } from "./Asset";
import type { Pagination } from "./Pagination";

export type ListAssetsResponse = {
  assets: Array<Asset>;
  pagination: Pagination;
};
