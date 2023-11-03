import React from "react";

const About = () => {
  
  return (
    <div
      name="about"
      className=" w-full text-white rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 h-auto place-items-center mt-20 md:mt-40 flex flex-col sm:flex-row"
    >
          <div className="p-5">
          <img src="https://i.pinimg.com/originals/00/c5/37/00c537bdf08547f031540521892e5aa7.gif" alt="" className="rounded-xl"/>
        </div>
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 pt-20">
          <p className=" text-4xl font-bold pt-20">About</p>
        </div>
        <p className="text-2xl mt-5 pb-40">
        I am a M.E.R.N Stack Developer who possess high passion for the development field.<br/>
          I am an aspiring web development professional, great commands at frontend designing and user-centric solutions. Collaborative, team player and also with great leadership quality in working with teams and executing goal-oriented projects. Strongly interested in obtaining the web developer position to contribute to the enhancement of the product.
        </p>
      </div>

    </div>
  );
};

export default About;