import { Suspense } from 'react';

import TagList from '../components/TagList';
import ArticleList from '../components/ArticleList';
import NavItem from '../components/NavItem';
import { useRecoilValue } from 'recoil';
import { currentTagState } from '../state/tag';

const Home = () => {
  const currentTag = useRecoilValue(currentTagState);

  return (
    <div>
      <div className="home-page">
        <div className="banner">
          <div className="container">
            <h1 className="logo-font">conduit</h1>
            <p>A place to share your knowledge.</p>
          </div>
        </div>

        <div className="container page">
          <div className="row">
            <div className="col-md-9">
              <div className="feed-toggle">
                <ul className="nav nav-pills outline-active">
                  <NavItem
                    name="Your Feed"
                    onChangeActive={() => {
                      console.log('?');
                    }}
                  />
                  <NavItem
                    name="Global Feed"
                    onChangeActive={() => {
                      console.log('?');
                    }}
                  />
                  {currentTag && (
                    <NavItem
                      name={`#${currentTag}`}
                      active={true}
                      onChangeActive={() => {
                        console.log('?');
                      }}
                    />
                  )}
                </ul>
              </div>
              <Suspense fallback={<div>loading article list...</div>}>
                <ArticleList />
              </Suspense>
            </div>
            <div className="col-md-3">
              <div className="sidebar">
                <p>Popular Tags</p>
                <Suspense fallback={<div>loading tag list...</div>}>
                  <TagList />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
