import React from 'react';
import { Link } from 'react-router-dom';

const HomeNavBar= ()=>{
    return(
        <nav>
        <ul>
        
         <li>
             <Link to='/' type='button'>Home</Link>
          </li>
          <li>
          <Link to='/signup'>Sign-Up</Link>
          </li>
          <li>
          <Link to='/login'>Sign-In</Link>
          </li>
          <li>
          <Link to='/articles-list'>Articles</Link>
          </li>
          
      </ul>
    </nav>
    )
    
     
}
export default HomeNavBar;