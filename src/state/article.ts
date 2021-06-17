import { selector } from 'recoil';

import { requestArticleList } from '../service/request/article';
import { Articles } from '../types';
import { requestIdState } from './request';
import { currentTagState } from './tag';

export const articleListQuery = selector<Articles>({
  key: 'articleListQuery',
  get: ({ get }) => {
    get(requestIdState);
    const tag = get(currentTagState);

    return requestArticleList({ ...(tag && { tag }) });
  },
});
