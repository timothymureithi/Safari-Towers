import React from "react";
import Img1 from "../../assets/adam-winger-OttUMTivRVc-unsplash.jpg";
import Img2 from "../../assets/sidekix-media--iQYdCr4EpE-unsplash.jpg";
import Img3 from "../../assets/frames-for-your-heart-JDBVXignFdA-unsplash.jpg";
import './Best.css';

const Best = () => {
  return (
    <div className="best">
      <h1>Best Top Rated Properties in Nairobi</h1>
      <div>
        <p>
          <span className="bold">All</span>
        </p>
        <p>Commercial</p>
        <p>Residential</p>
      </div>
      <div className="container">
        <img src={Img1} alt="" />
        <img src={Img2} alt="" />
        <img src={Img3} alt="" />
      </div>
      <div className="btn">View All</div>
    </div>
  );
};

export default Best;
