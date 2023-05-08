import React from "react";
import user from "../images/lilla.jpg"


const ContactCards = (props) => {
     const { id, name, email } = props.contact;

     return(
          <div className="item">
               <img className="ui avater image" src={user} alt="user" />
                   <div className="content">
                    <div className="header">{name}</div>
                    <div>{email}</div>
                    </div>
                    <i className="trash alternate outline icon" 
                    style={{color:"pink", marginTop:"7px"}}></i>
                   
               </div>
     )
}
export default ContactCards; 