/* istanbul ignore file */
/* tslint:disable */

export type CreateAssetRequestBody = {
  /**
   * 名前
   */
  name: string;
  /**
   * 詳細
   */
  description: string;
  /**
   * 背景色
   */
  backgroundColor: string;
  /**
   * プリセールフラグ
   */
  isPresale: boolean;
  /**
   * アセット画像のBase64
   */
  imageBase64: string;
  /**
   * 外部リンク
   */
  externalLink: string;
  /**
   * プロパティ
   */
  propaties: Array<string>;
};
