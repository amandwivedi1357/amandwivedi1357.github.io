import React from "react";
import milaap from "../Assets/Portfolio/ainak.jpg";
import travelo from "../Assets/Portfolio/travelocity.jpg";
import wrike1 from "../Assets/Portfolio/email.jpg";
import styluxe from "../Assets/Portfolio/styluxe.jpg";
import ai_Chat from "../Assets/Portfolio/ai-chat-app.png";
const Portfolio = () => {
  const newtab = () => {
    window.open("https://github.com/amandwivedi1357/ai-translator-chat-app","_blank");
  };

  const newtab1 = () => {
    window.open("https://ai-tranlation-app.vercel.app/","_blank");
  };
  const newtab2 = () => {
    window.open("https://github.com/amandwivedi1357/Styluxe.com","_blank");
  };
  const newtab3 = () => {
    window.open("https://styluxe.vercel.app/","_blank");
  };
  const newtab4 = () => {
    window.open("https://github.com/swapnilwakchaure/paltry_steam_6285","_blank");
  };
  const newtab5 = () => {
    window.open("https://cheerful-tanuki-86f4f3.netlify.app/","_blank");
  };
  const newtab6 = () => {
    window.open("https://github.com/PriyanshuPatil/Campaign-monitor.com","_blank");
  };
  const newtab7 = () => {
    window.open("https://incandescent-dusk-dc6fe6.netlify.app/home.html","_blank");
  };
  const newtab8 = ()=>{
    window.open('https://ainak-five.vercel.app/','_blank')
  }
  const newtab9 = ()=>{
    window.open('https://github.com/amandwivedi1357/Lenscart-Clone','_blank')
  }
  return (
    <div
      name="projects"
      className=" bg-white w-full text-black h-auto md:h-full place-items-center md:mt-40"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className=" pb-8 pt-40">
          <p className="text-4xl font-bold">Projects</p>
          {/* <p className="py-6">Checkout some of my projects here</p> */}
        </div>

        <div class="grid sm:grid-cols-1 md:grid-cols-1 md:w-3/3 gap-8 px-12 sm:px-0 ">
          <div class="flex flex-col sm:flex-row max-w-screen-lg ">
            <div class="text-white bg-gradient-to-r from-purple-500 to-pink-500 md:w-2/3 rounded-md">
              <div class="flex items-center justify-center">
                <h3
                  onClick={() => newtab()}
                  class="w-1/2 px-6 py-2 m-4 duration-50 hover:scale-105 cursor-pointer bg-slate-50 text-blue-500 rounded-md text-xl font-extrabold flex items-center justify-center"
                >
                  <button onClick={() => newtab()}>Code</button>
                </h3>
                <h3
                  onClick={() => newtab1()}
                  class="w-1/2 px-6 py-2 m-4 duration-50 hover:scale-105 cursor-pointer bg-slate-50 text-blue-500 rounded-md text-xl font-extrabold flex items-center justify-center"
                >
                  <button onClick={() => newtab1()}>Link</button>
                </h3>
              </div>
              <h3 onClick={() => newtab()} class="cursor-pointer">
                <img
                  src={ai_Chat}
                  alt="milaap"
                  class="rounded-md duration-300 hover:scale-105"
                />
              </h3>
            </div>

            <div class="flex flex-col justify-center border-black h-full sm:w-1 md:w-2/3 pl-8 pb-4">
              <h1 class="text-4xl font-bold mt-4 md:mt-0 ">AI-Tranlator-Chat-App</h1>
              <h1>
              This is a AI-based chat app which will let you chat with people in different language and it will translate for the end user according to his/her preference.
              </h1>
              <br />
              <p class="text-2xl font-bold">Features</p>
              <p >
               Responsive Design  <br />  Chat Application  <br /> Authentication feature <br /> product details <br />checkout page <br /> Free and Pro Version  feature
                
              </p>
              <br />
              <p class="text-2xl font-bold">TechStack </p>
              <p >
                Next JS <br /> TypeScript <br />React JS <br />Zustand <br />Tailwind CSS <br />Firebase
              </p>
            </div>
          </div>
          <div class="flex flex-col sm:flex-row max-w-screen-lg ">
            <div class="text-white bg-gradient-to-r from-purple-500 to-pink-500 md:w-2/3 rounded-md">
              <div class="flex items-center justify-center">
                <h3
                  onClick={() => newtab9()}
                  class="w-1/2 px-6 py-2 m-4 duration-50 hover:scale-105 cursor-pointer bg-slate-50 text-blue-500 rounded-md text-xl font-extrabold flex items-center justify-center"
                >
                  <button onClick={() => newtab()}>Code</button>
                </h3>
                <h3
                  onClick={() => newtab8()}
                  class="w-1/2 px-6 py-2 m-4 duration-50 hover:scale-105 cursor-pointer bg-slate-50 text-blue-500 rounded-md text-xl font-extrabold flex items-center justify-center"
                >
                  <button onClick={() => newtab1()}>Link</button>
                </h3>
              </div>
              <h3 onClick={() => newtab()} class="cursor-pointer">
                <img
                  src={milaap}
                  alt="milaap"
                  class="rounded-md duration-300 hover:scale-105"
                />
              </h3>
            </div>

            <div class="flex flex-col justify-center border-black h-full sm:w-1 md:w-2/3 pl-8 pb-4">
              <h1 class="text-4xl font-bold mt-4 md:mt-0 ">Lenskart.com Clone</h1>
              <h1>
              Ainak is a clone of lenscart website. Ainak is an online Ecommerce Website which is providing high quality eyewear. From this website, users can Order Computer Glasses,Sun Glasses,Kids Glasses and much more across the world.
              </h1>
              <br />
              <p class="text-2xl font-bold">Features</p>
              <p >
                Responsive Design  <br /> Authentication feature <br /> product details <br />checkout page <br /> 
                
              </p>
              <br />
              <p class="text-2xl font-bold">TechStack </p>
              <p >
                Next JS <br /> TypeScript <br />React JS <br />Zustand <br />Tailwind CSS <br />Firebase
              </p>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row max-w-screen-lg ">
            <div class="text-white bg-gradient-to-r from-purple-500 to-pink-500 md:w-2/3 rounded-md">
              <div class="flex items-center justify-center">
                <h3
                  onClick={() => newtab2()}
                  class="w-1/2 px-6 py-2 m-4 duration-50 hover:scale-105 cursor-pointer bg-slate-50 text-blue-500 rounded-md text-xl font-extrabold flex items-center justify-center"
                >
                  <button onClick={() => newtab2()}>Code</button>
                </h3>
                <h3
                  onClick={() => newtab3()}
                  class="w-1/2 px-6 py-2 m-4 duration-50 hover:scale-105 bg-slate-50 cursor-pointer text-blue-500 rounded-md text-xl font-extrabold flex items-center justify-center"
                >
                  <button onClick={() => newtab3()}>Link</button>
                </h3>
              </div>
              <h3 onClick={() => newtab3()} class="cursor-pointer">
                <img
                  src={styluxe}
                  alt="kindmeal"
                  class="rounded-md duration-300 hover:scale-105"
                />
              </h3>
            </div>

            <div class="flex flex-col justify-center border-black h-full sm:w-1 md:w-2/3 pl-8 pb-4">
              <h1 class="text-4xl font-bold mt-4 md:mt-0 ">
               Styluxe.com
              </h1>
              <h1>
              Stylux is E-commerce website specialized in online retailing of men's and women's garments and accessories and this is clone of yepme website
              </h1>
              <br />
              <p class="text-2xl font-bold">Features</p>
              <p>
                Landing Page <br /> SignUp/Login functionality <br /> Product
                pages <br /> payment functionality <br /> admin dashboard
              </p>
              <br />
              <p class="text-2xl font-bold">TechStack </p>
              <p>
                React js <br /> chakra-ui <br /> node js <br /> express js <br /> mongo db 
              </p>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row max-w-screen-lg ">
            <div class="text-white bg-gradient-to-r from-purple-500 to-pink-500 md:w-2/3 rounded-md">
              <div class="flex items-center justify-center">
                <h3
                 onClick={() => newtab4()}
                  class="w-1/2 px-6 py-2 m-4 duration-50 hover:scale-105 cursor-pointer bg-slate-50 text-blue-500 rounded-md text-xl font-extrabold flex items-center justify-center"
                >
                  <button onClick={() => newtab4()}>Code</button>
                </h3>
                <h3
                 onClick={() => newtab5()}
                  class="w-1/2 px-6 py-2 m-4 duration-50 hover:scale-105 cursor-pointer bg-slate-50 text-blue-500 rounded-md text-xl font-extrabold flex items-center justify-center"
                >
                  <button onClick={() => newtab5()}>Link</button>
                </h3>
              </div>
              <h3  onClick={() => newtab5()} class="cursor-pointer">
                <img
                  src={travelo}
                  alt="travelo"
                  class="rounded-md duration-300 hover:scale-105"
                />
              </h3>
            </div>
            <div class="flex flex-col justify-center border-black h-full sm:w-1 md:w-2/3 pl-8 pb-4">
              <h1 class="text-4xl font-bold mt-4 md:mt-0 ">
                Travelocity Clone
              </h1>
              <h1>
                An online travel agency for booking stays and flights for both
                domestic and international purposes.
              </h1>
              <br />
              <p class="text-2xl font-bold">Features</p>
              <p>
                SignUp/Login functionality <br />
                Search filter for stays <br /> Payment functionality with OTP
                authentication
              </p>
              <br />
              <p class="text-2xl font-bold">TechStack </p>
              <p>
                ReactJS <br /> Chakra
              </p>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row max-w-screen-lg ">
            <div class="text-white bg-gradient-to-r from-purple-500 to-pink-500 md:w-2/3 rounded-md">
              <div class="flex items-center justify-center">
                <h3
                  onClick={() => newtab6()}
                  class="w-1/2 px-6 py-2 m-4 duration-50 hover:scale-105 cursor-pointer bg-slate-50 text-blue-500 rounded-md text-xl font-extrabold flex items-center justify-center"
                >
                  <button   onClick={() => newtab6()}>Code</button>
                </h3>
                <h3
                   onClick={() => newtab7()}
                  class="w-1/2 px-6 py-2 m-4 duration-50 hover:scale-105 cursor-pointer bg-slate-50 text-blue-500 rounded-md text-xl font-extrabold flex items-center justify-center"
                >
                  <button   onClick={() => newtab7()}>Link</button>
                </h3>
              </div>
              <h3   onClick={() => newtab7()} class="cursor-pointer">
                <img
                  src={wrike1}
                  alt="wrike"
                  class="rounded-md duration-300 hover:scale-105"
                />
              </h3>
            </div>
            <div class="flex flex-col justify-center border-black h-full sm:w-1 md:w-2/3 pl-8 pb-4">
              <h1 class="text-4xl font-bold mt-4 md:mt-0 ">
                Campaign-Monitor.com
              </h1>
              <h1>
                A free email builder platform with variety of templates
              </h1>
              <br />
              <p class="text-2xl font-bold">Features</p>
              <p>
                Login functionality <br /> SignUp functionality <br /> email building with beautiful templates
              </p>
              <br />
              <p class="text-2xl font-bold">TechStack </p>
              <p>
                html <br /> css <br /> javascript
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;