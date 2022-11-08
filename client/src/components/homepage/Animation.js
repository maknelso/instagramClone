import React from "react";
import animate_1 from "../../assets/images/homepage/animate_1.png";
import animate_2 from "../../assets/images/homepage/animate_2.png";
import animate_3 from "../../assets/images/homepage/animate_3.png";
import animate_4 from "../../assets/images/homepage/animate_4.png";

const Animation = () => {
  return (
    <div className="animation__outer">
      <div className="animation__container">
        <div>
          <img src={animate_1} alt="" className="fade-in-1" />
        </div>
        <div>
          <img src={animate_2} alt="" className="fade-in-2" />
        </div>
        <div>
          <img src={animate_3} alt="" className="fade-in-3" />
        </div>
        <div>
          <img src={animate_4} alt="" className="fade-in-4" />
        </div>
      </div>
    </div>
  );
};

export default Animation;
