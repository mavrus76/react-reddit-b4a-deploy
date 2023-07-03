import React, { useEffect, useState } from 'react';
import './main.global.css';
import { hot } from 'react-hot-loader/root';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardList } from './shared/CardList';
import { PostsContextProvider } from './shared/context/postsContext';
import { rootReducer } from './shared/store/reducer';
import { saveToken } from './shared/store/token/actions';
import { replyContext } from './shared/context/replyContext';
import { Post } from './shared/Post';
import { Page404 } from './shared/Page404';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

function AppComponent() {
  const [replyValue, setReplyValue] = useState('');
  const ReplyProvider = replyContext.Provider;

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    store.dispatch(saveToken() as any);
  }, []);

  return (
    <Provider store={store}>
      {mounted && (
        <BrowserRouter>
          <PostsContextProvider>
            <ReplyProvider
              value={{
                value: replyValue,
                onChange: setReplyValue,
              }}>
              <Layout>
                <Header />
                <Content>
                  <Switch>
                    <Route path='/posts/:id'>
                      <Post />
                    </Route>
                    <Route path='/'>
                      <CardList />
                    </Route>
                    <Route path='*'>
                      <Page404 />
                    </Route>
                    <Route path='/'>
                      <Redirect to='/posts' />
                    </Route>
                    <Route path='/auth'>
                      <Redirect to='/posts' />
                    </Route>
                  </Switch>
                </Content>
              </Layout>
            </ReplyProvider>
          </PostsContextProvider>
        </BrowserRouter>
      )}
    </Provider>
  );
}

export const App = hot(() => <AppComponent />);
