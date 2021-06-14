import { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import App from './App';

const $root = document.getElementById('root');

ReactDOM.render(
  <Router>
    <RecoilRoot>
      <Suspense fallback={true}>
        <App />
      </Suspense>
    </RecoilRoot>
  </Router>,
  $root
);
