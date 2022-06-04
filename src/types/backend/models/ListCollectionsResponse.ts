/* istanbul ignore file */
/* tslint:disable */

import type { ListCollections } from "./ListCollections";
import type { Pagination } from "./Pagination";

export type ListCollectionsResponse = {
  collections: Array<ListCollections>;
  pagination: Pagination;
};
