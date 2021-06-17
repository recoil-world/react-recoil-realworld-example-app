export interface ArticleOnServer {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: {
    username: string;
    bio: string;
    image: string;
    following: boolean;
  };
}

export interface ArticlesOnServer {
  articles: ArticleOnServer[];
  articlesCount: number;
}

export interface Article extends Omit<ArticleOnServer, 'createdAt' | 'updatedAt'> {
  createdAt: Date;
  updatedAt: Date;
}

export interface Articles {
  articles: Article[];
  articlesCount: number;
}

export type TagType = string;
