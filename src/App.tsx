import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Article from './pages/Article';
import Auth from './pages/Auth';
import Settings from './pages/Settings';
import Editor from './pages/Editor';
import Profile from './pages/Profile';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/article" component={Article} />
        <Route path={['/login', '/register']} component={Auth} />
        <Route path="/settings" component={Settings} />
        <Route path="/editor/:article-slug?" component={Editor} />
        <Route path={['/profile/:username', '/profile/:username/favorites']} component={Profile} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
