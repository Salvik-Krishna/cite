import React from 'react';
import './static/css/admin.css';

const admin = ({ users }) => {
  return (
    <div>
      <center>
        <h2>ADMIN PAGE</h2>
      </center>
      <br /><br /><br />
      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user[0]}</td>
              <td>{user[1]}</td>
              <td>{user[2]}</td>
              <td>{user[3]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default admin;
