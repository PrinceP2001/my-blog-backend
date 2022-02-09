import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'
import validation from './signupvalidation';
// import FirstPage from '.../pages/FirstPage';

function SignUp(props) {
	
//   storing form values
    const [signupvalues,setSignupValues]=useState({username:'',email:'',password:'',repassword:''});
	// storing errors
	const [errorvalues,setErrorValues]=useState({})
	// to confirm button is clicked
	const [issubmit,setIsSubmit]=useState(false);

	const handlechange=(event)=>{
		const {name,value}=event.target;
		setSignupValues({...signupvalues,[name]:value});
		// console.log(signupvalues);
	}

	const handlesubmit=(event)=>{
		event.preventDefault();
		setErrorValues(validation(signupvalues));
		setIsSubmit(true);
	}
	useEffect(()=>{
       if(Object.keys(errorvalues).length===0 && issubmit){
		   alert("Signup Successfull");
	   }
	},[errorvalues])


	
    return (
        <div className='signup-body'>
            <div className='main-w3layouts wrapper'>
			{/* {Object.keys(errorvalues).length===0 && issubmit ? (<Login/>):<SignUp/>} */}
		<h1 className='signup-head'>SignUp</h1>
		<div className='main-agileinfo'>
			<div className='agileits-top'>
				<form action='/api/signup' method="post" onSubmit={handlesubmit}>
					<input className="sign-text" type="text" name="username" required="" placeholder='Enter username' value={signupvalues.username} onChange={handlechange}></input>
					<p className='error'>{errorvalues.username}</p><br></br>
					<input className="sign-email" type="email" name="email" required="" placeholder='Enter your email' value={signupvalues.email} onChange={handlechange}></input>
					<p className='error'>{errorvalues.email}</p><br></br>
					<input className="sign-password" type="password" name="password" required="" placeholder='Enter Password' value={signupvalues.password} onChange={handlechange}></input>
					<p className='error'>{errorvalues.password}</p><br></br>
					<input className="text-w3lpass" type="password" name="repassword" placeholder="Confirm Password" required="" value={signupvalues.repassword} onChange={handlechange}></input>
					<p className='error'>{errorvalues.repassword}</p>
					<div className="wthree-text">
						
						<div className="clear"> </div>
					</div>
					<button className='sign-button' type='submit'>SignUp</button>
				</form>
				<p>Don't have an Account? <br></br>
				<Link to='/login'>Login Now!</Link></p>
			</div>
		</div>
		
	
	</div>
        </div>
    );
}

export default SignUp;