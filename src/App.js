import React from 'react';
import Profile from './components/Profile';
import user from './user.json'
import './App.css';

function App() {
  return <div>
    
    <Profile
      src={user.avatar}
      alt={user.name}
      name={user.name}
      tag={user.tag}
      location={user.location}
      followers={user.stats.followers}
      views={user.stats.views}
    likes={user.stats.likes}
    />
  

  </div>
}
export default App;
