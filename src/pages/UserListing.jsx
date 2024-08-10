import React from 'react';
import './userlisting.css'

const userInformation = 
    {totalusers: 5246,
    totalposts: 2462,
    lastActiveUsers: 503,
    lastPost: 302,}
 

const UserListing = () => {
    return (
        <div className='home-container'>
         
            <div className='inner-container'>
                <div className='info-container'>
                     <h2> Total Users </h2>
                     <p className='info-para'> {userInformation.totalusers} </p>
                </div>
                <div className='info-container'>
                     <h2> Users Active in the Last 24 Hours </h2>
                     <p className='info-para'> {userInformation.lastActiveUsers} </p>
                </div>
            </div>

            <table>
 
  <tr>
    <th>User ID</th>
    <th>Username</th>
    <th>Name</th>
    <th>Email</th>
    <th>Edit/Ban</th>
  </tr>
  <tr>
    <td>25841</td>
    <td> rock_anih </td>
    <td>Rock Anih </td>
    <td>rockan45@gmail.com</td>
    <td>
        <button className='btn-post'>Edit</button>
        <button className='btn-post'>Ban</button>
    </td>
  </tr>
  <tr>
  <td>25842</td>
    <td> afrif </td>
    <td> Afrif Khnaa </td>
    <td>afrif5@gmail.com</td>
    <td>
        <button className='btn-post'>Edit</button>
        <button className='btn-post'>Ban</button>
    </td>
  </tr>
  <tr>
  <td>25843</td>
    <td> nayat </td>
    <td> Nayat Abrahi </td>
    <td>nayat85@gmail.com</td>
    <td>
        <button className='btn-post'>Edit</button>
        <button className='btn-post'>Ban</button>
    </td>
  </tr>
</table>

        </div>
    );
};

export default UserListing;