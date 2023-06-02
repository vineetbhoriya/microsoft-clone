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
      {/* icons */}
      <div className="flex items-center my-5 md:space-x-20 flex-col justify-center md:flex-row">
        <div className="flex items-center flex-col space-y-3">
          <img className="w-10" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/icon-LL-Windows-Logo-80x80?wid=40&hei=40" alt="image" />
          <a href="#" className="cursor-pointer text-blue-700 underline">Choose your Microsoft 365</a>
        </div>
        <div className="flex items-center flex-col space-y-3">
          <img className="w-10" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/icon-LL-Tablet-Kickstand-Landscape-Mode-Fluent-80x80?wid=40&hei=40" alt="image" />
          <a href="#" className="cursor-pointer text-blue-700 underline">Explore Surface devices</a>
        </div>
        <div className="flex items-center flex-col space-y-3">
          <img className="w-10" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/icon-LL-Xbox-Logo-80x80?wid=40&hei=40" alt="image" />
          <a href="#" className="cursor-pointer text-blue-700 underline">Buy Xbox games</a>
        </div>
        <div className="flex items-center flex-col space-y-3">
          <img className="w-10" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/icon-LL-Windows-Logo-80x80?wid=40&hei=40" alt="image" />
          <a href="#" className="cursor-pointer text-blue-700 underline">Get Windows 11</a>
        </div>
      </div>
      {/* end icons */}
      {/* cards */}
      <div className="flex md:space-x-4 p-5 md:justify-center md:flex-row flex-col ">
        <div className="flex flex-col w-auto items-start space-y-6 md:w-1/4">
          <img src="/src/assets/images/gldn-XGP-Game-Pass-Ultimate-Characters-06102010-1.webp" alt="image" />
          <div className="flex flex-col space-y-3">
            <h1 className="text-3xl">Xbox Game Pass Ultimate</h1>
            <p>Xbox Live Gold and hundreds of high-quality console and PC games. Play together with friends and discover your next favourite game.</p>
          </div>
          <a href="" className="text-blue-700">Join Now</a>
        </div>
        <div className="flex flex-col  items-start space-y-6 w-auto md:w-1/4">
          <img src="/src/assets/images/Content-Card-Minecraft-Legends-2023.webp" alt="image" />
          <div className="flex flex-col space-y-3">
            <h1 className="text-3xl">Unite the Overworld in Minecraft Legends</h1>
            <p>Explore lush biomes, make alliances with new friends and familiar mobs, then face the piglins in epic battles. But be warned—they always fight back.</p>
          </div>
          <a href="" className="text-blue-700">Join Now</a>
        </div>
        <div className="flex flex-col  items-start space-y-6 w-auto md:w-1/4">
          <img src="/src/assets/images/Content-Card-Surface-Laptop-5-M1-Platinum-01-1.webp" alt="image" />
          <div className="flex flex-col space-y-3">
            <h1 className="text-3xl">Surface Laptop 5</h1>
            <p>Sophisticated style and multitasking speed powered by 12th Gen Intel® Core, with Windows 11.</p>
          </div>
          <a href="" className="text-blue-700">Join Now</a>
        </div>
        <div className="flex flex-col  items-start space-y-6 w-auto md:w-1/4">
          <img src="/src/assets/images/Content-Card-Bing-AI-Open-Preview.webp" alt="image" />
          <div className="flex flex-col space-y-3">
            <h1 className="text-3xl">Announcing the next wave of AI innovation</h1>
            <p>The new Microsoft Bing and Edge will soon feature more visual search responses, chat history, and persistent chat within Edge. We’re also adding actions to help people complete tasks.</p>
          </div>
          <a href="" className="text-blue-700">Join Now</a>
        </div>
      </div>
      {/*end cards */}

    </>
  );
}

export default App;
