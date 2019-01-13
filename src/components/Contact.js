import React, { Component } from "react";
import { SocialIcon } from 'react-social-icons';
 
class Contact extends Component {
  render() {
    return (
        <div id='contact'>
        <p id="pfont">My Contacts</p>
        <SocialIcon id='myIcon' url="https://www.linkedin.com/in/catherine-zhu-zhuang-8332b512b/" />
        <SocialIcon id='myIcon' url="https://www.facebook.com/catherine.zhuang.90" />
        <SocialIcon id='myIcon' url="https://plus.google.com/u/0/114898390992914763492" />
      </div>
    );
  }
}
 
export default Contact;