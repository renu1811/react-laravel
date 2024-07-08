import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { useEffect, useState } from "react";
import Home from './components/Home';
/* https://www.youtube.com/watch?v=Vy9Nc0oNzR8 
https://www.youtube.com/playlist?list=PLLUtELdNs2ZYnEIWliBpU98gtorNRNHw1
*/

function App() {
  const [text,setText] = useState('change the color');
  const [users,setUsers] = useState([]);

//   const getCustomersData = () => {
//     axios
//         .get("http://127.0.0.1:8000/api/users")
//         .then((response) => setUsers(response.data['users']))
//         .catch(error => console.log(error));
// };
 const getCustomersData = ()=>{
   return fetch("http://127.0.0.1:8000/api/users")
    .then((response) => response.json())
    .then((data) =>
      setUsers(data['users'])
    );
 };
 const user = ()=><div>test</div>

useEffect(() => {
  getCustomersData();
},[]);



  return (
    <div className="App">
      <header className="App">
        <Home/>
        <h1>Welcome to react {text}</h1>
        <button>click me</button>
        <Button onClick={()=>setText("red color changed")}>Boostrap button</Button>
      </header>
       <ul>
        {users && users.length > 0 && users.map((userObj,index) => (
          <li key={userObj.id}>{userObj.name} {userObj.email}</li>
        ))}
      </ul> 
     

    </div>
  );
}

export default App;
