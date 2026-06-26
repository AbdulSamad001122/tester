import React from "react";

const Contact = () => {
  return (
    <>
      <div>Contact</div>
      <label for="userEmail">Email Address:</label>
      <input type="email" id="userEmail" name="email"></input>
      <label for="userNmae">Your name:</label>
      <input type="name" id="userName" name="name"></input>
    </>
  );
};

export default Contact;
