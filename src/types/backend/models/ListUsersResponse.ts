/* istanbul ignore file */
/* tslint:disable */

import type { Pagination } from "./Pagination";
import type { User } from "./User";

export type ListUsersResponse = {
  users: Array<User>;
  pagination: Pagination;
};
