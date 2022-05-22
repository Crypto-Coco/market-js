/* istanbul ignore file */
/* tslint:disable */

export type Pagination = {
  /**
   * ヒット件数
   */
  totalCount: number;
  /**
   * オフセット
   */
  offsetValue?: number;
  /**
   * 1ページのデータ数
   */
  perPage: number;
  /**
   * ページ総数
   */
  totalPages?: number;
  /**
   * 現在のページ
   */
  currentPage: number;
  /**
   * 次のページ
   */
  nextPage?: number;
  /**
   * 前のページ
   */
  prevPage?: number;
  /**
   * 最初のページ
   */
  isFirstPage?: boolean;
  /**
   * 最後のページ
   */
  isLastPage?: boolean;
};
