import React from 'react';
import Profile from './components/Profile/Profile';
import user from './user.json'
import Statistics from './components/Statistics/Statistics'
import statisticalData from './statistical-data.json'
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
     <Statistics title="Upload stats" stats={statisticalData} />
  

  </div>
}
export default App;
