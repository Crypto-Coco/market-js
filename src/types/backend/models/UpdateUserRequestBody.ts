/* istanbul ignore file */
/* tslint:disable */

export type UpdateUserRequestBody = {
  /**
   * ユーザーネーム
   */
  username?: string;
  /**
   * 説明
   */
  description?: string;
  /**
   * TwitterのURL
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
   * プロフィール画像のBase64
   */
  profileImageBase64?: string;
  /**
   * プロフィール画像のBase64
   */
  coverImageBase64?: string;
};
