import React from 'react'
import { useAuth } from '../../../context/AuthProvider';
import { Link, NavLink } from 'react-router-dom';
import { navLinks } from '../../../utils/data';

const Nav = () => {
  const {role, logout} = useAuth();

  return (
    <div>
        <nav>
            <NavLink to='/'>
                Home
            </NavLink>
            {
                role &&
                navLinks[role].map(link=>(
                    <NavLink key={link.to} to={`${link.to}`}>
                        <p>{link.label}</p>
                    </NavLink>
                ))
            }

            {/** Later add a profile pic on clicking we get to profile page */}

            {role?(
                <button onClick={logout}>
                    Logout
                </button>
            ):(
                <Link to='/login'>
                    Login
                </Link>
            )}
        </nav>
    </div>
  )
}

export default Nav;