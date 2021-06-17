import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { articleListQuery } from '../state/article';
import { requestIdState } from '../state/request';
import ArticlePreview from '../components/ArticlePreview';

const ArticleList = () => {
  const articleList = useRecoilValue(articleListQuery);
  const [requestId, setRequestId] = useRecoilState(requestIdState);

  useEffect(() => {
    setRequestId(requestId + 1);
  }, []);

  return (
    <>
      {articleList.articles.map((article) => (
        <ArticlePreview key={article.slug} {...article} />
      ))}
    </>
  );
};

export default ArticleList;
