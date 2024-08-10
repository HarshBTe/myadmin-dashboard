import React from 'react';
import './home.css';

const userInformation = 
   {totalusers: 5246,
   totalposts: 2462,
   lastActiveUsers: 503,
   lastPost: 302,}


const Home = () => {
    return (
        <div className='home-container'>
            <h1 className='heading'> Welcome to Your Dashboard </h1>
            <div className='inner-container'>
                <div className='info-container'>
                     <h2> Total Users </h2>
                     <p className='info-para'> {userInformation.totalusers} </p>
                </div>
                <div className='info-container'>
                     <h2> Total Posts </h2>
                     <p className='info-para'> {userInformation.totalposts} </p>
                </div>
            </div>

            <div className='inner-container'>
                <div className='info-container'>
                     <h2> Users Active in the Last 24 Hours </h2>
                     <p className='info-para'> {userInformation.lastActiveUsers} </p>
                </div>
                <div className='info-container'>
                     <h2> Posts Published in the Last 24 Hours </h2>
                     <p className='info-para'> {userInformation.lastPost} </p>
                </div>
            </div>

        </div>
    );
};

export default Home;