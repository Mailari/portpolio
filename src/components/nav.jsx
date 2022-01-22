import React from "react";
import { Link, Outlet } from "react-router-dom";
import moon from "./../assets/moon.svg";

export default function Nav(props) {
  return (
    <div>
      <div
        style={{ backgroundColor: props.color ? "white" : "black" }}
        className="sticky overflow-hidden top-0 flex h-[80px] flex-row md:px-[20%] list-none px-[10vw] justify-between shadow-sm"
      >
        <h1 className="self-center md:text-2xl text-sm font-extrabold">
          Mailari Hulihond
        </h1>
        <div className=" my-5 flex flex-row">
          <nav className="flex">
            <li className=" self-center px-[2vw] text-[#c0bdbd] text-sm">
              <Link to="/work">Work</Link>
            </li>
            <li className=" self-center px-[2vw] text-[#c0bdbd] text-sm">
              <Link to="/">About</Link>
            </li>
            <li className=" self-center px-[2vw] text-[#c0bdbd] text-sm">
              <Link to="/blog">Blog</Link>
            </li>
            <button style={{ width: "25px" }} onClick={props.changeTheme}>
              <img src={moon} alt="" />
            </button>
          </nav>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
