import React from 'react'

const Signup = () =>{
    return(
      <div>
        <label> Sign Up Form
          <form>
            <div>
              <input type="text" name="username" placeholder="Username"/>
              <label htmlFor="username">Username</label>
            </div>
            <div>
              <input type="password" name="password" placeholder="Password" />
              <label htmlFor="password">Password</label>
            </div>
            <input type="submit" value="Sign Up" />
          </form>
        </label>
      </div>
    );
  };

  export default Signup