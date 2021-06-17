import APIClient from '../../API/APIClient';
import { TagType } from '../../types';

export const requestTags = async () => {
  const responseData = await APIClient.get<{ tags: TagType[] }>('/tags');

  return responseData.tags;
};
