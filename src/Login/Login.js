import React, { useState } from 'react';
import { AiOutlineStar ,AiOutlineArrowRight} from 'react-icons/ai';
import { GiPayMoney } from 'react-icons/gi';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { GoLocation } from 'react-icons/go';
import { FcGoogle } from 'react-icons/fc';
import  firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseconfig';
import './Login.css'
import './LoginForm.css'

const Login = () => {
    const [googleUser, setGoogleUser] = useState({});
    console.log(googleUser);
    const [loggedInUser, setLoggedInUser] = useState([]);
    const [newUser, setNewUser] = useState(false);
//   const history = useHistory();
//   const location = useLocation();
//   const { from } = location.state || { from: { pathname: "/" } };

const [user, setUser] = useState({
    isSignedIn: false,

    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    user: ''
});
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      const { displayName, email } = result.user;
      const signedInUser = { name: displayName, email }
      setGoogleUser(signedInUser);
    //   storeAuthToken();
    }).catch(function (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }

//   const storeAuthToken = () => {
//     firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
//       .then(function (idToken) {
//         sessionStorage.setItem('token', idToken);
//         history.replace(from);
//       }).catch(function (error) {
//         // Handle error
//       });
//   }



const handleBlur = (e) => {

    let isFieldValid = true;

    if (e.target.name === "email") {
        isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);


    }
    if (e.target.name === "password") {
        const isPasswordValid = e.target.value.length > 6;
        const passwordHasCharacter = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(e.target.value)
        isFieldValid = isPasswordValid && passwordHasCharacter;
    }
    if (isFieldValid) {
        const newUserInfo = { ...user };
        newUserInfo[e.target.name] = e.target.value;
        // console.log(newUserInfo);
        setUser(newUserInfo);

    }
}

const handleLogin = (e) => {

    if (newUser && user.email && user.password) {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((userCredential) => {

                var user = userCredential.user;
                const newUserInfo = { ...user };
                newUserInfo.error = '';
                setUser(newUserInfo);
                updateUserInfo(user.name);

            })
            .catch((error) => {
                // var errorCode = error.code;
                // var errorMessage = error.message;
                const newUserInfo = { ...user };
                newUserInfo.error = error.message;
                setUser(newUserInfo);
            });
    }

    if (!newUser && user.email && user.password) {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((userCredential) => {

                var user = userCredential.user;
                const newUserInfo = { ...user };
                newUserInfo.error = '';
                setUser(newUserInfo);
                setLoggedInUser(newUserInfo);
                // history.replace(from);

            })
            .catch((error) => {
                // var errorCode = error.code;
                // var errorMessage = error.message;
                const newUserInfo = { ...user };
                newUserInfo.error = error.message;
                setUser(newUserInfo);
            });

    }


    e.preventDefault();
}
const updateUserInfo = name => {

    const user = firebase.auth().currentUser;

    user.updateProfile({
        displayName: name
      
    }).then(function () {
        // Update successful.
    }).catch(function (error) {
        // An error happened.
    });
}
// const handleConfirmPassword =(event) =>{
//     if (event.target.value !== this.state.password) {
//       console.log('error');
//       }




    return (
        <div className="login-page">
            <div className="login-page-container" >
    
                            <div class="myCard">
                                <div class="login-box">
                                    <div class="login-snip"> <input id="tab-1" type="radio" name="tab" class="sign-in" checked /><label for="tab-1" class="tab">Login</label> <input id="tab-2" type="radio" name="tab" class="sign-up" /><label for="tab-2" class="tab">Sign Up</label>
                                        <div class="login-space">
                                            <div class="login" onSubmit={handleLogin}>
                                                <div class="group"> <label for="user" class="label">Username</label> <input id="exampleInputName"  onBlur={handleBlur} type="text" class="input" placeholder="Enter your username" /> </div>
                                                <div class="group"> <label for="pass" class="label">Password</label> <input id="exampleInputPassword1" onBlur={handleBlur} type="password" class="input" data-type="password" placeholder="Enter your password" /> </div>
                                                <div class="group"> <input id="check" type="checkbox" class="check" checked /> <label for="check"><span class="icon"></span> Keep me Signed in</label> </div>
                                                <div class="group"> <input type="submit" class="button" value="Sign In" /> </div>
                                                <div class="hr"></div>
                                                <div class="foot"> <a href="/">Forgot Password?</a> </div>
                                                <div class="group mt-2">  <input type="submit" onClick={handleGoogleSignIn} class="button"  value="Login with google" /></div>
                                            </div>
                                            <div class="sign-up-form" onSubmit={handleLogin}>
                                                <div class="group"> <label for="user" class="label">Username</label> <input id="exampleInputName" type="text" class="input" onBlur={handleBlur} placeholder="Create your Username" /> </div>
                                                <div class="group"> <label for="pass" class="label">Password</label> <input id="exampleInputEmail1" type="password" class="input" onBlur={handleBlur} data-type="password" placeholder="Create your password" /> </div>
                                                <div class="group"> <label for="pass" class="label">Repeat Password</label> <input id="exampleInputPassword1" type="password" class="input" onBlur={handleBlur} data-type="password" placeholder="Repeat your password" /> </div>
                                                <div class="group"> <label for="pass" class="label">Email Address</label> <input id="exampleInputPassword1" type="text" class="input" onBlur={handleBlur} placeholder="Enter your email address" /> </div>
                                                <div class="group"> <input type="submit" class="button" value="Sign Up" /> </div>
                                                <div class="hr"></div>
                                                <div class="foot"> <label for="tab-1">Already Member?</label> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        {/* </div>
                    </div> */}






                    {/* <h4 className="text-center">  User Login </h4>
                    <div className="form-group mt-4">
                        <label htmlFor="">User Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input type="password" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className="text-danger">Forgot your password?</label>
                    </div>
                    <div className="from-group mt-5">
                        <button className="btn btn-info"> <FcGoogle />  Google Sign in</button>
                    </div> */}

                {/* </div> */}

                <div className="login-page-content text-light ">
                  
                    <div className="login-page-mini-content">
                        <h3 className=" ">WELCOME TO , <span className="login-text">RESIDO</span></h3>
                        <p><AiOutlineStar />  <AiOutlineStar />  <AiOutlineStar />  <AiOutlineStar /> Find best flat, at flat rate</p>
                        <h5><AiOutlineArrowRight/> Modern Design and Smart Architecture</h5>
                        <h5><AiOutlineArrowRight />Ready Flat at cheapest rate</h5>
                        <h5><AiOutlineArrowRight />Best Service with best quality</h5>
                    </div>
                    <div className=" login-page-icon-box text-class">
                        <div className=" d-flex ">
                            <div className="login-color  p-3 "><GiPayMoney className="fs-2"></GiPayMoney></div>
                            <div className="text-dark bg-light p-2 "><p className="text-class">10% down payment</p></div>
                        </div>
                        <div className="d-flex ">
                            <div className="login-color p-3 "><RiMoneyDollarCircleLine className="fs-2"></RiMoneyDollarCircleLine> </div>
                            <div className="text-dark bg-light p-2"><p>Easy installment</p></div>
                        </div>
                        <div className="d-flex ">
                            <div className="login-color p-3"><GoLocation className="fs-2 text-light " ></GoLocation></div>
                            <div className="text-dark bg-light p-2"><p>Excellent Location</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Login;