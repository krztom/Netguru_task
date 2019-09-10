import React from 'react';
import './App.css';
import { Layout } from './containers/Layout';
import BigTitleRow from './sections/BigTitleRow';
import PostsRow from './sections/PostsRow';

function App() {
  return (
    <div className="App">
      <Layout>
        <BigTitleRow/>
        <PostsRow/>
      </Layout>
    </div>
  );
}

export default App;
