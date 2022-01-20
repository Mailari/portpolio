import React from "react";

export default function Work() {
  const skills = [
    "React",
    "HTML",
    "CSS",
    "Javascript",
    "Typescript",
    "Nodejs",
    "MongoDB",
    "Postgres",
    "Redis",
    "Flutter",
    "Dart",
    "Training",
  ].map((s) => {
    return (
      <div className="bg-[#7e7d7d91] mx-2 my-4  w-[18vh] h-10 rounded-[3vw] text-center  ">
        <p className="py-2">{s}</p>
      </div>
    );
  });

  return (
    <div className=" mx-25 text-center flex flex-col ">
      <h1 className="text-[4.5vh] font-medium w-[45vw] self-center">
        Mailari Hulihond is Full-Stack Developer from Banglore
      </h1>
      <br />
      <div className="flex w-[60%] flex-row flex-wrap  self-center justify-left">
        {skills}
      </div>
    </div>
  );
}
