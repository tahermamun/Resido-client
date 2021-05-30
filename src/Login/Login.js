import React from 'react';
import { FcGoogle, FcRight } from 'react-icons/fc';
import { AiOutlineStar } from 'react-icons/ai';
import { GiPayMoney } from 'react-icons/gi';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { GoLocation } from 'react-icons/go';


import './Login.css'

const Login = () => {
    return (
        <div className="login-page">
            <div className="row py-5" style={{ height: "80vh"  }}>
                <div className="col-md-5 shadow p-5 mx-5 align-items-center  bg-light">
                    <h4 className="text-center">  User Login </h4>
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
                    </div>
                </div>

                <div className="col-md-5 text-light mt-5">
                    <div>
                        <h3 className=" ">WELCOME TO , <span className="text-info">RESIDO</span></h3>
                        <p><AiOutlineStar />  <AiOutlineStar />  <AiOutlineStar />  <AiOutlineStar /> Find best flat, at flat rate</p>
                        <h5><FcRight /> Modern Design and Smart Architecture</h5>
                        <h5><FcRight />Ready Flat at cheapest rate</h5>
                        <h5><FcRight />Best Service with best quality</h5>
                    </div>
                    <div className=" row mt-5 text-class">
                        <div className="col-md-4 d-flex ">
                        <div className="bg-info  p-3 "><GiPayMoney className="fs-2"></GiPayMoney></div>
                        <div className="text-dark bg-light p-2 "><p className="text-class">10% down payment</p></div>
                        </div>
                        <div className="col-md-4 d-flex ">
                        <div className="bg-info p-3 "><RiMoneyDollarCircleLine className="fs-2"></RiMoneyDollarCircleLine> </div>
                        <div className="text-dark bg-light p-2"><p>Easy installment</p></div>
                        </div>
                        <div className="col-md-4 d-flex ">
                        <div className="bg-info p-3"><GoLocation className="fs-2 text-light " ></GoLocation></div>
                        <div className="text-dark bg-light p-2"><p>Excellent Location</p></div>
                        </div>
                    </div>

                    

                </div>





            </div>

        </div>
    );
};



export default Login;