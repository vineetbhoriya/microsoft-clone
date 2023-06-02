import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* navbar */}
      <div className="navbar px-6 p-4 flex justify-between items-center mx-1">
        <div className="flex justify-center space-x-5 items-center md:order-3">
          <div className="hamburger inline-block p-0 md:hidden">
            <div className="line h-0.5 w-4 my-1 bg-black"></div>
            <div className="line h-0.5 w-4 my-1 bg-black"></div>
            <div className="line h-0.5 w-4 my-1 bg-black"></div>
          </div>
          <div>
            <a href="" className="invisible md:visible  md:block md-link">
              All Microsoft
            </a>
          </div>
          <button className="flex items-center space-x-2">
            <a href="" className="md-link md:block invisible md:visible">
              Search
            </a>
            <ion-icon className="rotate-360" name="search-outline"></ion-icon>
          </button>
        </div>
        <div className="logo flex relative items-center justify-between space-x-4 md:order-1">
          <div className="flex items-center justify-between space-x-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Microsoft_icon.svg/800px-Microsoft_icon.svg.png"
              alt="microsoft-logo"
              className="w-5"
            />
            <h1>Microsoft</h1>
          </div>
          <div className="md:flex bg-gray-100 w-fit md:static md:w-auto md:mx-2 md:bg-white md:space-x-2 absolute inset-0 md-link">
            <div>
              <a href="">Microsoft 365</a>
            </div>
            <div>
              <a href="">Teams</a>
            </div>
            <div>
              <a href="">Windows</a>
            </div>
            <div>
              <a href="">Surface</a>
            </div>
            <div>
              <a href="">Xbox</a>
            </div>
            <div>
              <a href="">Support</a>
            </div>
          </div>
        </div>
        <div className="account flex justify-between space-x-5 items-center md:order-3">
          <button className="flex items-center space-x-2">
            {" "}
            <a href="" className="invisible md:visible">
              Card
            </a>
            <ion-icon name="cart-outline"></ion-icon>
          </button>
          <button>
            <ion-icon name="person-add-outline"></ion-icon>
          </button>
        </div>
      </div>
      {/* end navbar */}

      {/* slider */}
      <div className="slider my-3 flex flex-col">
        <div className="left">
          <div className="image relative">
            <img
              src="/src/assets/images/Highlight-M365-Icon-Bounce-Word-Merch_VP5-1920x600.webp"
              alt="image"
              className="w-full  h-80"
            />
          </div>
          <div className="cart flex flex-col p-5 md:p-0 my-3 left-20 top-20 md:my-8 items-start space-y-5 md:absolute inset-0 md:w-1/3 ">
            <div className="flex flex-col space-y-3">
              <h1 className="text-4xl w-fit">Microsoft 365</h1>
              <p className="w-fit p-0 text-start">
                Turn your ideas into reality, stay safer online and off, and
                focus on what matters most with Microsoft 365 apps
              </p>
            </div>
            <div className="flex  flex-col md:flex-row w-full md:items-center items-start md:space-x-4 space-y-3">
              <button className="bg-blue-600 p-2 rounded-md px-7  text-white py-2 font-semibold">
                For one person
              </button>
              <span className="flex text-blue-600  px-2 md:px-5 md:py-5 py-2  items-center">
                <a href="#" className="cursor-pointer font-semibold ">
                  For up to six people{" "}
                </a>
                <ion-icon
                  className="cursor-pointer"
                  name="chevron-forward-outline"
                ></ion-icon>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex space-x-4 justify-center items-center">
        <button className=" cursor-pointer transition  hover:-translate-y-1  text-2xl">
          <ion-icon className="" name="pause-circle-outline"></ion-icon>
        </button>
        <button className=" cursor-pointer transition  hover:-translate-y-1  text-2xl">
          <ion-icon className="" name="chevron-back-outline"></ion-icon>
        </button>
        <button className="w-2.5 h-2.5 bg-black rounded-full"></button>
        <button className="w-2.5 h-2.5 bg-black rounded-full"></button>
        <button className=" cursor-pointer transition  hover:-translate-y-1  text-2xl">
          <ion-icon className="" name="chevron-forward-outline"></ion-icon>
        </button>
      </div>
      {/* end slider */}
    </>
  );
}

export default App;
