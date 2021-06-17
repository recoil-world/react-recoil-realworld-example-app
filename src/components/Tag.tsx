import { MouseEventHandler } from 'react';
import { TagType } from '../types';

interface TagProps {
  tag: TagType;
  outline?: boolean;
  onFilter?: () => void;
}

const Tag = ({ tag, outline, onFilter }: TagProps) => {
  const filter: MouseEventHandler<HTMLLIElement> = (event) => {
    event.preventDefault();

    onFilter && onFilter();
  };

  return (
    <li className={`tag-pill tag-default ${outline ? 'tag-outline' : ''}`} onClick={filter}>
      {tag}
    </li>
  );
};

export default Tag;
