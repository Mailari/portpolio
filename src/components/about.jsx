import React from "react";
import profile from "./../assets/profile.svg";

export default function About() {
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
    <div className="md:mx-[20%] mx-10 mb-5 mt-[10vh] mx-25 flex flex-col ">
      <img className="mb-[5vh] md:w-[14vw] w-[60%] " src={profile} alt="" />
      <p className="text-[2.5vw] md:text-[2vh] self-start text-green-500 font-bold tracking-widest ">
        HYE THERE,
      </p>
      <h1 className="text-[5.5vw] md:text-[6vh] tracking-widest font-bold self-start ">
        I'm Mailari Hulihond.
      </h1>
      <p className="text-left md:text-[2.2vh] text-[1.6vh]">
        I'm a full stack developer with a passion for full stack development.
        Welcome to my corner of internet, I'm glad you are here!
      </p>
      <br />
      <br />
      <p className="text-[2.5vw] md:text-[2vh] self-start text-green-500 font-bold tracking-widest ">
        SKILLS,
      </p>
      <div className="flex  flex-row flex-wrap  text-center  justify-left">
        {skills}
      </div>
      <br />
      <br />
      <p className="text-[2.5vw] md:text-[2vh] self-start text-green-500 font-bold tracking-widest ">
        CONNECT,
      </p>
      <div className=" md:text-[2.2vh] text-[1.6vh]">
        <a href="mailto: mailarighulihond@gmail.com">
          <p>Email : mailarighulihond@gmail.com</p>
        </a>
        <a href="telto: +91 7676 58 1818">
          <p>Phone number : (+91) 7676 58 1818</p>
        </a>
        <a href="mailarigh.com">
          {" "}
          <p>Website : www.mailarigh.com</p>
        </a>
        <p>Address : Aditya Nagar, KonanKunte, Banglore</p>
        <br />
        <a href="https://github.com/Mailari">
          <p>GitHub : https://github.com/Mailari</p>
        </a>
        <a href="https://www.linkedin.com/in/mailari-hulihond-43525a176">
          <p>LinkedIn : https://www.linkedin.com/in/mailari-hulihond</p>
        </a>
        <a href="https://twitter.com/Mailari70261991">
          <p>Twitter : https://twitter.com/Mailari70261991</p>
        </a>
        <a href="https://www.facebook.com/mailari.hulihond">
          <p>facebook : https://www.facebook.com/mailari.hulihond</p>
        </a>
        <a href="https://wa.me/+917676581818">
          <p>whatsapp : https://wa.me/+917676581818</p>
        </a>
      </div>
    </div>
  );
}
