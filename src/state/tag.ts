import { atom, selector } from 'recoil';

import { requestTags } from '../service/request/tag';
import { TagType } from '../types';
import { requestIdState } from './request';

export const currentTagState = atom<TagType>({
  key: 'currentTag',
  default: '',
});

export const tagsQuery = selector<TagType[]>({
  key: 'tags',
  get: ({ get }) => {
    get(requestIdState);

    return requestTags();
  },
});
