import { Card } from './Card';
import userJson from '../data/user.json';
import { Statistics } from './Statistics';
import dataJson from '../data/data.json';
import {FriendList} from './FriendList';
import friendsJson from '../data/friends.json'
import {TransactionHistory} from './TransactionHistory';
import dataTransaktions from '../data/transactions'


function App() {
  return (
    <div className='App'>
      <Card user = {userJson} />
      <Statistics title='Upload stats' stats={dataJson} />
      <FriendList friends={friendsJson} />
      <TransactionHistory transactions={dataTransaktions} />
    </div>
  )
};

export default App