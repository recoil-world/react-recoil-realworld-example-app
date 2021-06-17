import { Suspense } from 'react';

import TagList from '../components/TagList';
import ArticleNav from '../components/ArticleNav';
import ArticleList from '../components/ArticleList';

const Home = () => {
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
              <ArticleNav />
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
