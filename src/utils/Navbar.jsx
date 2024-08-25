import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Logo } from "../images/imgs";
import { navLinks } from "../constants";
import { Cart, Search, User, Close, Menu, Dashboard } from "../images/svg";
import { useDispatch, useSelector } from "react-redux";
import { getAuthUser } from "../redux/actions/authActions";

const Navbar = ({ openSearch, searchPage, cartItemsNums }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [dashboardImg, setDashboardImg] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const authUserData = useSelector((state) => state.authReducer.getAuth);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  //handel search
  const onSubmit = async (e) => {
    e.preventDefault();
    if (searchValue !== "") {
      navigate(`/search?value=${searchValue}`);
      openSearch(false);
    }
  };

  //get auth user
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      dispatch(getAuthUser(token));
    }
  }, [token]);

  useEffect(() => {
    if (authUserData) {
      if(authUserData.status === 200){
        if (authUserData.data) {
          if (authUserData.data.role === "admin") {
            setDashboardImg(true);
          }
        }
      }else if(authUserData.status === 401){
        localStorage.removeItem("token")
      }
    }
  }, [authUserData]);

  // switch user and dashboard icon
  useEffect(()=>{
    if(localStorage.getItem("token")){
      setDashboardImg(true)
    }else{
      setDashboardImg(false)
    }
  }, [localStorage.getItem("token")])



  return (
    <div className="bg-white">
      <p className="py-2 bg-sky-950 text-lg text-white font-semibold text-center uppercase">
        Free Shipping On All Orders Above $99
      </p>
      <nav className="py-3 xl:px-10 px-3 flex items-center border-b">
        <div className="w-fit">
          <a href="/">
            <img width={100} src={Logo} alt="logo" />
          </a>
        </div>
        <div className="size-12 hidden ml-auto max-xl:flex justify-center items-center rounded-full hover:bg-slate-100">
          <img
            width={50}
            src={Menu}
            alt="menu"
            className="cursor-pointer"
            onClick={() => setShowMenu(true)}
          />
        </div>
        <ul className="w-[50%] flex-grow hidden xl:flex items-center justify-center gap-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                className="text-base uppercase font-bold zinc-800 hover:text-orange-500 duration-300"
                to={link.path}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="w-fit xl:flex hidden justify-end items-center gap-5">
          <div
            className="size-10 hover:bg-slate-100 cursor-pointer duration-300 rounded-full flex items-center justify-center"
            onClick={() => openSearch(true)}
          >
            <img width={23} src={Search} alt="search" />
          </div>
          <div className="size-10 hover:bg-slate-100 cursor-pointer duration-300 rounded-full flex items-center justify-center">
            <Link className="relative" to={"/cart"}>
            <img width={25} src={Cart} alt="search" />
            <span className="absolute left-[-10px] bottom-[-10px] flex justify-center items-center rounded-full text-sm font-semibold size-5 bg-orange-500 text-white">{cartItemsNums}</span>
            </Link>
          </div>
          <div className="size-10 hover:bg-slate-100 cursor-pointer duration-300 rounded-full flex items-center justify-center">
            <Link to={dashboardImg ? "/admin" : "/login"}>
              <img width={25} src={dashboardImg ?  Dashboard: User} alt="search" />
            </Link>
          </div>
        </div>
        {/* mobile menu */}
        <div
          className={`fixed right-0 top-0 z-50 w-full h-screen bg-slate-200 flex flex-col gap-5 items-center justify-start pt-10 ${
            showMenu ? "mr-0" : "mr-[-100%]"
          } duration-300`}
        >
          <img
            width={20}
            height={20}
            src={Close}
            alt="close"
            onClick={() => setShowMenu(false)}
          />
          <img width={150} src={Logo} alt="logo" className="mt-10" />
          <ul className="flex flex-col items-center gap-5">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className="text-zinc-900 text-xl pb-2 border-b border-zinc-900 font-Josefin"
              >
                <NavLink to={link.path} onClick={() => setShowMenu(false)}>
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        {/* Search Page */}
        <div
          className={`fixed w-full min-h-screen top-0 left-0 z-50 bg-black/90 ${
            searchPage ? "block" : "hidden"
          }`}
          onClick={() => openSearch(false)}
        >
          <form
            className="w-[95%] xl:w-1/2 mt-[80px] mx-auto flex flex-col items-center gap-5"
            onSubmit={onSubmit}
          >
            <input
              className="w-full rounded-md outline-none border-none py-5 px-3 bg-zinc-800 text-white"
              type="search"
              placeholder="Search..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onClick={(e) => e.stopPropagation()}
            />
            <input
              type="submit"
              value={"Search"}
              className="p-3 w-[25%] cursor-pointer rounded-md bg-sky-950 text-white"
            />
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
