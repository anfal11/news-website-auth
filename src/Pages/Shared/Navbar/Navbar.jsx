import { Link, NavLink } from "react-router-dom";
import puser from '../../../assets/user.png'
import { AuthContext } from "../../../Providers/AuthProvider";
import { useContext } from "react";
import toast from "react-hot-toast";

const Navbar = () => {

  const { user,logOut } = useContext(AuthContext);
  console.log(user);

  const handleLogOut = () => {
    logOut()
    .then(() => {
      toast.success('user has Successfully logged out!')
    }).catch((error) => {
      console.log(error.message);
    });
  }

    const navLinks = <>
    <li>
    <NavLink className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "border-b-2 border-red-600" : ""}
    to='/'>
    Home
    </NavLink>
    </li>
    <li>
    <NavLink className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "border-b-2 border-red-600" : ""}
    to='/about'>
    About
    </NavLink>
    </li>
    <li>
    <NavLink className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "border-b-2 border-red-600" : ""}
    to='/career'
    >Career
    </NavLink>
    </li>
    </>
    return (
        <div className="mt-5 font-poppins mb-14">
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown mb-14">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 text-[#706F6F] text-lg">
        {
            navLinks
        }
      </ul>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu-horizontal gap-5 px-1 text-[#706F6F] text-lg">
      {
        navLinks
      }
    </ul>
  </div>
  <div className="navbar-end gap-2">
  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={puser} />
        </div>
      </label>
      {
        user 
        ? 
        <button className="btn bg-[#403F3F] text-white hover:bg-[#403F3F]" onClick={handleLogOut}>Log  Out</button>
        :
        <Link to='/login'>
        <button className="btn bg-[#403F3F] text-white hover:bg-[#403F3F]">Log In</button>
        </Link>
      }
    
  </div>
</div>
        </div>
    );
};

export default Navbar;