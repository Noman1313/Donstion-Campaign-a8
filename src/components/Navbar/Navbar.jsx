import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 mt-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 rounded-box w-24 gap-2 font-semibold">
                        <Link to="/home">Home</Link>
                        <Link to="/donation">Donation</Link>
                        <Link to="/statistics">Statistics</Link>
                    </ul>
                </div>
                <img src="https://i.ibb.co/4N2CzKm/Logo.png" alt="" />
            </div>
            <div className="navbar-end hidden md:flex">
                <ul className="menu menu-horizontal px-1 gap-3 font-semibold">
                    <Link to="/home">Home</Link>
                    <Link to="/donation">Donation</Link>
                    <Link to="/statistics">Statistics</Link>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;