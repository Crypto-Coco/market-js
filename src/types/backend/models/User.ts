/* istanbul ignore file */
/* tslint:disable */

export type User = {
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
  /**
   * 表示名
   */
  displayName: string;
  /**
   * Emailアドレス
   */
  email: string;
};
