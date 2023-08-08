import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero">
      <div className="content">
        <h1>Find a happy and loving home</h1>
        <p className="search-text">
          Find a beautiful spacious apartment with us
        </p>
        <form className="search">
          <div>
            <input type="text" placeholder="Enter Keyword.." />
          </div>
          <div className="radio">
            {/* <input type="radio" />
            <label>Buy</label>
            <input type="radio" />
            <label>Rent</label> */}
            <button type="submit">
              <AiOutlineSearch className="icon" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
