import React, {useState} from "react";
import './LoginSignUp.css';

import user_icon from '../../assets/person.png';
import password_icon from '../../assets/password.png';
import email_icon from '../../assets/email.png';
import { useNavigate } from "react-router-dom";

const LoginSignUp = () => {

    const [action,setAction] = useState("Sign Up");
    const navigate = useNavigate();

    const handleLogin = () => {
        //Do dodania - proces autoryzacji 

        navigate('/main')
    }

    return(
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="submit-container">
                <div className={action === "Sign In"? "submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action === "Sign Up"? "submit gray": "submit"} onClick={()=>{setAction("Sign In")}}>Sign In</div>
            </div>
            <div className="inputs">
                {/*username*/}
                {action === "Sign In"? <div></div>:                
                <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder="Wojtek" />
                </div>}

                {/*email*/}
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder="joedoe@gmail.com" />
                </div>
                {/*password*/}
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder="Password" />
                </div>
                {action === "Sign Up"? <div></div>:<div className="forgot-password">Lost Password? <span>Click Here</span></div>}
            </div>
            <div className="submit-btn" onClick={handleLogin}>Login</div>
        </div>
    )
}

export default LoginSignUp;