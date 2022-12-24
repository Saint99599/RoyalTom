import './Register.css';

import {Link} from 'react-router-dom';
import logo from '../component/image/royal_tom_logo.png'; 

function Register() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const jsonData = {
            Fname: data.get('Fname'),
            Lname: data.get('Lname'),
            UserName: data.get('UserName'),
            Password: data.get('Password'),
            IDCard: data.get('IDCard'),
            Email: data.get('Email'),
            PhoneNumber: data.get('PhoneNumber'),
        }

        fetch('http://localhost:3333/register', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.status === 'ok'){
                alert('Register Success Welcome -_-')
            }else{
                alert('Register Failed olo')
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
                <h1 className="signupTitle">Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div className="smallContainer">
                        <div className="smallInputBox">
                            <label className="subjectText">Name</label>
                            <label className="redStar">*</label>
                            <input className="inputBox" type="text" placeholder="Enter Name" name="Fname" required/>
                        </div>
                        <div className="smallInputBox">
                            <label className="subjectText">Last Name</label><label className="redStar">*</label>
                            <input className="inputBox" type="text" placeholder="Enter Last Name" name="Lname" required/>
                        </div>
                    </div>
                    <div className="smallContainer">
                        <div className="smallInputBox">
                            <label className="subjectText">Username</label><label className="redStar">*</label>
                            <input className="inputBox" type="text" placeholder="Enter Username" name="UserName" required/>
                        </div>
                        <div class="smallInputBox">
                            <label class="subjectText">Password</label><label class="redStar">*</label>
                            <input class="inputBox" type="password" placeholder="Enter Password" name="Password" required/>
                        </div>
                    </div>
                    <div className="LowerBox">
                        <div className="gridItemBox">
                            <label className="subjectText">ID Card</label><label className="redStar">*</label>
                            <input className="inputBox" type="text" placeholder="Enter ID Card" name="IDCard" required/>
                        </div>
                        <div className="gridItemBox">
                            <label className="subjectText">Email</label><label className="redStar">*</label>
                            <input className="inputBox" type="text" placeholder="Enter Email" name="Email" required/>
                        </div>
                        <div className="gridItemBox">
                            <label className="subjectText">Phone Number</label><label className="redStar">*</label>
                            <input className="inputBox" type="text" placeholder="Enter Phone Number" name="PhoneNumber" required/>
                        </div>
                    </div>
                    <div className="signupOuterBox">
                        <button type="submit" className="signupButton">Sign Up</button>
                    </div>
                </form>
        
                <p className="termPolicy">By signing up, you agree to Royal Tom's 
                    <a className="textGreen" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Terms of Service & Privacy Policy</a>
                </p>
                <div className="haveAccount">
                    <p className="haa">Have an account ? 
                        <Link className="textGreen" to = "/login">
                                Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
  }
  
export default Register;