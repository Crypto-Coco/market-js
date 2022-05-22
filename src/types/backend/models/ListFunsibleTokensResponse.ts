/* istanbul ignore file */
/* tslint:disable */

import type { FunsibleToken } from "./FunsibleToken";
import type { Pagination } from "./Pagination";

export type ListFunsibleTokensResponse = {
  funsibleTokens: Array<FunsibleToken>;
  pagination: Pagination;
};
