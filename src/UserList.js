import { useState, useEffect } from "react";
import  axios  from "axios";


const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);


  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
    .then(res =>setListOfUser(res.data)) 
      
  }, []);


  return (
    <div>
      {listOfUser.map((user) => {
        return (
          
          <ul>
            <li>{user.name}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default UserList;
