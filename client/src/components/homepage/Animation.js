import React from "react";
import animate_1 from "../../assets/images/homepage/animate_1.png";
import animate_2 from "../../assets/images/homepage/animate_2.png";
import animate_3 from "../../assets/images/homepage/animate_3.png";
import animate_4 from "../../assets/images/homepage/animate_4.png";

const Animation = () => {
  return (
    <div class="animation__outer">
      <div class="animation__container">
        <div>
          <img src={animate_1} alt="" class="fade-in-1" />
        </div>
        <div>
          <img src={animate_2} alt="" class="fade-in-2" />
        </div>
        <div>
          <img src={animate_3} alt="" class="fade-in-3" />
        </div>
        <div>
          <img src={animate_4} alt="" class="fade-in-4" />
        </div>
      </div>
    </div>
  );
};

export default Animation;
