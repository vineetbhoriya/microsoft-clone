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
          <div><a href="" className="invisible md:visible  md:block md-link">All Microsoft</a></div>
          <button className="flex items-center space-x-2"><a href="" className="md-link md:block invisible md:visible">Search</a>
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
          <button className="flex items-center space-x-2"> <a href="" className="invisible md:visible">Card</a>
            <ion-icon name="cart-outline"></ion-icon>
          </button>
          <button>
            <ion-icon name="person-add-outline"></ion-icon>
          </button>
        </div>
      </div>
      {/* end navbar */}

      

    </>
  );
}

export default App;
