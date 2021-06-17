import { useRecoilState, useRecoilValue } from 'recoil';

import { currentTagState, tagsQuery } from '../../state/tag';

const useTag = () => {
  const tags = useRecoilValue(tagsQuery);
  const [currentTag, setCurrentTag] = useRecoilState(currentTagState);

  const clearCurrentTag = () => {
    setCurrentTag('');
  };

  const isGlobalTag = currentTag === '';

  return { tags, currentTag, setCurrentTag, clearCurrentTag, isGlobalTag };
};

export default useTag;
