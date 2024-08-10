import React from 'react';
import './userlisting.css'

const userInformation = 
    {totalusers: 5246,
    totalposts: 2462,
    lastActiveUsers: 503,
    lastPost: 302,}
 

const PostListing = () => {

    

    return (
        <div className='home-container'>
         
            <div className='inner-container'>
            <div className='info-container'>
                     <h2> Total Posts </h2>
                     <p className='info-para'> {userInformation.totalposts} </p>
                </div>
                <div className='info-container'>
                     <h2> Posts Published in the Last 24 Hours </h2>
                     <p className='info-para'> {userInformation.lastPost} </p>
                </div>
            </div>

            <table>
 
  <tr>
    <th>Post ID</th>
    <th>Post Caption</th>
    <th>Media URL</th>
    <th>Add/Hide</th>
  </tr>
  <tr>
    <td>241</td>
    <td>Internship Certificate </td>
    <td>https://linkedin/intenship-certification  </td>
    <td>
        <button className='btn-post'>Delete</button>
        <button className='btn-post'>Hide</button>
    </td>
  </tr>
  <tr>
  
    <td>242</td>
    <td>Getting Pass for Workshop </td>
    <td>https://linkedin/pass-certification </td>
    <td>
        <button className='btn-post'>Delete</button>
        <button className='btn-post'>Hide</button>
    </td>
  </tr>
  <tr>
  <td>243</td>
    <td>Getting Selected for Job </td>
    <td>https://linkedin/job-selection </td>
    <td>
        <button className='btn-post'>Delete</button>
        <button className='btn-post'>Hide</button>
    </td>
  </tr>
  
</table>

        </div>
    );
};

export default PostListing;