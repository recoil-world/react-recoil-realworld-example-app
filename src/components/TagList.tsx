import Tag from '../components/Tag';
import useTag from '../service/hooks/useTag';

const TagList = () => {
  const { tags, setCurrentTag } = useTag();

  return (
    <ul className="tag-list">
      {tags.map((tag, index) => (
        <Tag key={index} tag={tag} onFilter={() => setCurrentTag(tag)} />
      ))}
    </ul>
  );
};

export default TagList;
