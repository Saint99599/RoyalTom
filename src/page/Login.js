import './Register.css';

import {Link} from 'react-router-dom';
import logo from '../component/image/royal_tom_logo.png'; 

function Login() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const jsonData = {
            UserName: data.get('UserName'),
            Password: data.get('Password'),
        }

        fetch('http://localhost:3333/login', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.status === 'ok'){
                alert('Login Success Welcome -_-')
                localStorage.setItem('token', data.token)
                window.location = '/home'
            }else{
                alert('Login Failed olo')
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });

    };

  return ( 
    <div className="itemSide">
            <div className="imageLogo">
                <img className="" src={logo} alt="logo"/>
            </div>
            <div className="signupBox">
                <h1 className="signupTitle">Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="LowerBox">
                        <div className="gridItemBox">
                            <label className="subjectText">User Name</label>
                            <label className="redStar">*</label>
                            <input className="inputBox" type="text" placeholder="Enter User Name"name="UserName" required/>
                        </div>
                        <div className="gridItemBox">
                            <label className="subjectText">Password</label>
                            <label className="redStar">*</label>
                            <input className="inputBox" type="password" placeholder="Password" name="Password" required/>
                        </div>
                    </div>
                    <div className="signupOuterBox">
                        <button type="submit" className="signupButton">Sign In</button>
                    </div>
                </form>
                <div className="haveAccount">
                    <p className="haa">Have an account ? 
                        <Link className="textGreen" to = "/register">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
  );
}

export default Login;