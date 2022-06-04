/* istanbul ignore file */
/* tslint:disable */

export type SimpleCategory = {
  /**
   * データ作成日時を表すtimestamp
   */
  createdAt: number;
  /**
   * データ更新日時を表すtimestamp
   */
  updatedAt: number;
  /**
   * カテゴリID（マスター管理）
   */
  id: string;
  name: string;
};
