import { Link } from 'react-router-dom';

import { Article } from '../types';
import { toUSDate } from '../utils/date';

const ArticlePreview = ({
  slug,
  title,
  description,
  createdAt,
  favoritesCount,
  author,
}: Article) => {
  return (
    <div className="article-preview">
      <div className="article-meta">
        <Link to={`/profile/${author.username}`}>
          <img src={author.image} />
        </Link>
        <div className="info">
          <a href="" className="author">
            {author.username}
          </a>
          <span className="date">{toUSDate(createdAt)}</span>
        </div>
        <button className="btn btn-outline-primary btn-sm pull-xs-right">
          <i className="ion-heart" /> {favoritesCount}
        </button>
      </div>
      <Link to={`/article/${slug}`} className="preview-link">
        <h1>{title}</h1>
        <p>{description}</p>
        <span>Read more...</span>
      </Link>
    </div>
  );
};

export default ArticlePreview;
