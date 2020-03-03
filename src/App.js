import React from 'react';
import './App.css';

import UserList from './components/user-list/user-list.component';
import UserProfile from './components/user-profile/user-profile.component';
import Posts from './components/posts/posts.component';

function App() {
  return (
    <div className="App">
      <Posts/>
      <UserList dataSource='https://jsonplaceholder.typicode.com/users'/>
      <UserProfile name='John Elia' email='johnelia@gmail.com' dataSource='https://jsonplaceholder.typicode.com/posts'/>
    </div>
  );
}

export default App;
