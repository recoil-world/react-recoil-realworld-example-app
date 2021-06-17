import NavItem from './NavItem';
import useTag from '../service/hooks/useTag';

const ArticleNav = () => {
  const { currentTag, setCurrentTag, clearCurrentTag, isGlobalTag } = useTag();

  return (
    <div className="feed-toggle">
      <ul className="nav nav-pills outline-active">
        {/* <NavItem
        name="Your Feed"
        onChangeActive={() => {
          console.log('?');
        }}
      /> */}
        <NavItem
          name="Global Feed"
          active={isGlobalTag}
          onChangeActive={() => {
            clearCurrentTag();
          }}
        />
        {currentTag && (
          <NavItem
            name={`#${currentTag}`}
            active={true}
            onChangeActive={() => {
              setCurrentTag(currentTag);
            }}
          />
        )}
      </ul>
    </div>
  );
};

export default ArticleNav;
