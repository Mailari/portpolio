import React from "react";
import gpstek from "./../assets/gpstek.png";
import sa from "./../assets/sa.png";
export default function Work() {
  return (
    <div className="">
      <div className="flex flex-col-reverse justify-center md:flex-row text-center">
        <div className="m-10">
          <h2>GPSTEK.in</h2>
          <button className="my-2 rounded-lg border-2">
            <a href="https://gpstek.in">
              <p className="px-5">View Site</p>
            </a>
          </button>
        </div>
        <img
          className="w-[80%] m-4 md:m-10  md:w-[40%] self-center"
          src={gpstek}
        />
      </div>
      <br />
      <div className="flex flex-col justify-center md:flex-row text-center">
        <img className="w-[80%] m-4 md:m-10  md:w-[40%] self-center" src={sa} />
        <div className="m-10">
          <h2>sacapital.co.in</h2>
          <button className="my-2 rounded-lg border-2">
            <a href="https://sacapital.co.in">
              <p className="px-5">View Site</p>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
