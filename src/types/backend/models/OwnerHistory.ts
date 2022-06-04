/* istanbul ignore file */
/* tslint:disable */

import type { User } from "./User";

export type OwnerHistory = {
  /**
   * データ作成日時を表すtimestamp
   */
  createdAt: number;
  /**
   * データ更新日時を表すtimestamp
   */
  updatedAt: number;
  id: string;
  user: User;
};
