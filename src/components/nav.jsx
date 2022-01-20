import React from "react";
import { Link } from "react-router-dom";
import moon from "./../assets/moon.svg";
export default function Nav(props) {
  return (
    <div className="flex justify-center">
      <div className="w-[10%]"></div>
      <nav className="list-none place-self-end flex flex-row justify-center my-10 h-10">
        <li className="px-[2vw] text-[#c0bdbd] text-sm">
          <Link to="/">Work</Link>
        </li>
        <li className="px-[2vw] text-[#c0bdbd] text-sm">
          <Link to="/about">About</Link>
        </li>
        <li className="px-[2vw] text-[#c0bdbd] text-sm">
          <Link to="/resume">Resume</Link>
        </li>
      </nav>
      <div className="w-[30px] ml-[10%] my-10 ">
        <button onClick={props.changeTheme}>
          <img src={moon} alt="" />
        </button>
      </div>
    </div>
  );
}
