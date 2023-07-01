import React, {useState} from "react";

export const Login = () => {
  const [userName, setUser] = useState ('');
  const [pass, setPass] = useState ('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userName);

  }
  return (
    <div>
      <nav className= "navbar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
   <div className="auto-form-container">
    <h3>Login</h3>
    <form className= "login-form" onSubmit = {handleSubmit}>
      <label for= "userName">Username</label>
      <input value={userName} onChange={(e) => setUser(e.target.value)}type="userName" placeholder= 'Enter Username'/>
      <label for= "password">Password</label>
      <input value={pass} onChange={(e) => setPass(e.target.value)}type="Password" placeholder= 'Enter Password'/>
      <button type= "submit">Log In</button>
    </form>
  </div>
  </div>
  );
};