import { useRecoilValue, useSetRecoilState } from 'recoil';

import { currentTagState, tagsQuery } from '../state/tag';
import Tag from '../components/Tag';

const TagList = () => {
  const setCurrentTag = useSetRecoilState(currentTagState);
  const tags = useRecoilValue(tagsQuery);

  return (
    <ul className="tag-list">
      {tags.map((tag, index) => (
        <Tag key={index} tag={tag} onFilter={() => setCurrentTag(tag)} />
      ))}
    </ul>
  );
};

export default TagList;
