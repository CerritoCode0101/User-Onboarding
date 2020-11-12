import './App.css';
import Contacts from './component/Contacts'
import Form from './component/Form'
import axios from 'axios';
import React, {useState, useEffect} from 'react';

function App() {

  const [contacts,setContacts]=useState([]);

  useEffect(() => {
      axios.get('https://reqres.in/api/users')
      .then((response) => {
        console.log(response.data.data)
        setContacts(response.data.data)
      })
      .catch((err) => {
        console.log(err)
        debugger
      })
    }, [])
console.log("contacts",contacts)
  return (
    <div className="App">
      <header className="App-header">
   <Form />
    <Contacts contacts={contacts}/>
      </header>
    </div>
  );
}

export default App;
