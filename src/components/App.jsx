import Card from './task-1/card'
import userJson from '../data/user.json';
import Statistics from './task-2/Statistics';
import dataJson from '../data/data.json';
// import FriendList
import friendsJson from '../data/friends.json'


function App() {
  return (
    <div className='App'>
      <Card user = {userJson} />
      <Statistics title='Upload stats' stats={dataJson} />
      <FriendList friends={friendsJson} />
    </div>
  )
};

export default App