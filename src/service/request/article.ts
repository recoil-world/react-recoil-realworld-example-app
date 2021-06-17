import APIClient from '../../API/APIClient';
import { ArticlesOnServer, Articles, TagType } from '../../types';
import { toQueryString } from '../../utils/request';

export interface RequestArticleListOption {
  [key: string]: string | number | undefined;
  tag?: TagType;
  author?: string;
  favorited?: string;
  limit?: number;
  offset?: number;
}

export const requestArticleList = async (option?: RequestArticleListOption): Promise<Articles> => {
  const queryString = option ? '?' + toQueryString(option) : '';

  const { articles: articlesOnServer, articlesCount } = await APIClient.get<ArticlesOnServer>(
    '/articles' + queryString
  );

  const articles = articlesOnServer.map(({ updatedAt, createdAt, ...others }) => ({
    updatedAt: new Date(updatedAt),
    createdAt: new Date(createdAt),
    ...others,
  }));

  return {
    articles,
    articlesCount,
  };
};
