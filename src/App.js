import logo from './logo.svg';
import React from 'react';
import './App.css';
import User from './social-media/user.json';
import Statistical from './statistical/statistical-data.json'
import FriendData from './friends-list/friend-list.json'
import TransactionData from './transactions/transaction-data.json'
import SocialList from './social-media/SocialList.jsx'
import Statistic from './statistical/Statistic.jsx'
import FriendList from './friends-list/FriendList.jsx'
import TransactionHistory from './transactions/TransactionHistory';



const App = () => {
  
  return (
    <div className="app">
    <SocialList items={User} />
    <Statistic title="Upload stats" stats={Statistical} />
    <FriendList friends={FriendData} />
    <TransactionHistory items={TransactionData} />;
    </div>
  )
};

export default App;
