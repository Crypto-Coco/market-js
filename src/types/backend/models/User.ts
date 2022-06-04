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
   * ユーザーネーム(デフォルトはアドレス)
   */
  username: string;
  /**
   * Emailアドレス
   */
  email: string;
  /**
   * 説明
   */
  description: string;
  /**
   * InstagramのURL
   */
  twitterUrl?: string;
  /**
   * InstagramのURL
   */
  instagramUrl?: string;
  /**
   * FacebookのURL
   */
  facebookUrl?: string;
  /**
   * プロフィール画像のURL
   */
  profileImageUrl?: string;
  /**
   * プロフィール画像のURL
   */
  coverImageUrl?: string;
};
