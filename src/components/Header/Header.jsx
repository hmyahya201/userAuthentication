/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleLogOut = ()=>{
        logOut()
        .then(()=>{})
        .cath(error=>{
            error.message
        })
    }

    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <Link className="btn btn-ghost normal-case text-xl">Auth master</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/">Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/login">Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/register">Register</Link>
                {user?<><span>{user.email}</span><button className="btn btn-xs" onClick={handleLogOut}>sign Out</button></>:<Link to="/login"><button className="btn btn-xs">Login</button></Link>}
            </div>
        </div>
    );
};

export default Header;