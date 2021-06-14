import APIClient from '../../API/APIClient';
import { ArticlesOnServer, Articles } from '../../types';

export const requestArticleList = async (): Promise<Articles> => {
  const { articles: articlesOnServer, articlesCount } = await APIClient.get<ArticlesOnServer>(
    '/articles'
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
