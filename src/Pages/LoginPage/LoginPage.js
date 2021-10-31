import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import background from '../../images/loginPage/loginBackground.png'

// Login Page Background Style
const loginBackgroundStyle = {
    backgroundImage: `url(${background})`,
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: 'no-repeat'
}

const LoginPage = () => {
    const { signInUsingGoogle } = useAuth()
    const location = useLocation()
    const history = useHistory()
    const redirect_url = location.state?.from || '/home'

    // Custom Login Handler
    const handleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url)
            })
            .catch(error => console.log(error))
    }

    return (
        <div style={loginBackgroundStyle} className="d-flex align-items-center justify-content-center">
            <div>
                <button onClick={handleLogin} className="btn btn-success">Login Using Google</button>
            </div>
        </div>
    );
};

export default LoginPage;