import Card from './task-1/card'
import userJson from '../data/user.json';
import Statistics from './task-2/Statistics';
import dataJson from '../data/data.json';
import FriendList from './task-3/FriendList';
import friendsJson from '../data/friends.json'
import TransactionHistory from './task-4/TransactionHistory';
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