import React from 'react';
import { Redirect } from 'react-router-dom';

function Logout() {
  const logout = () => {
    localStorage.removeItem('token');
    this.props.history.push('/login');
  };

  
    return (
      <div>
        {/* if (localStorage.getItem("token")) {

        } */}
        <h5>You are about logout!! ARE YOU SURE??</h5>
        <button onClick={logout} >Logout</button>
      </div>
    );
  }


export default Logout;

