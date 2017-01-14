import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-details';

const App = () => (
  <div>
    <h2>All Users</h2><hr />
    <UserList />
    <hr />
    <h2>Details</h2>
    <UserDetails />
  </div>
);

export default App;