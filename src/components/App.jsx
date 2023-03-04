import Card from './task-1/card'
import userJson from '../data/user.json';


function App() {
  return (
    <div className='App'>
      {<Card user = {userJson} />/* <Card name={userJson.username}
            {/* tag={userJson.tag}
            location={userJson.location}
            avatar={userJson.avatar}
            followers={userJson.followers}
            views={userJson.views}
            likes={userJson.likes} /> */} 
    </div>
  )
};

export default App