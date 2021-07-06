import React from 'react';



function Contact(props){
const {contacts} = props


console.log("props",props)
  return(
      <div>
        {contacts.map((p)=>{
      return(
          <div style={{color:'red'}}>
              <h2>Name: {p.first_name}</h2>
              <h3>Email: {p.email}</h3>
              <img width="300px" src={p.avatar} alt="nerds"/>
          </div>
      )
  })}


      </div>
  )
}

export default Contact;