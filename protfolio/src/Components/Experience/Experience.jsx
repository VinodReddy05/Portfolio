import React, { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "./Experience.css";

const Experience = () => {
  const [startCount, setStartCount] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.1,    
  });

  if (inView && !startCount) {
    setStartCount(true);
  }

  return (
    <div className="expi">
      <div className="experience" id="experience" data-aos="zoom-in-right" data-aos-anchor-placement="top-bottom" ref={ref}>
      <div className="achievement">
        <div className="circle">
          {startCount && (
            <CountUp start={0} end={6} duration={3} suffix="+" />
          )}
        </div>
        <p>months</p>
        <p>Experience</p>
      </div>

      <div className="achievement">
        <div className="circle">
          {startCount && (
            <CountUp start={0} end={10} duration={3} suffix="+" />
          )}
        </div>
        <p>completed</p>
        <p>Projects</p>
      </div>

      <div className="achievement">
        <div className="circle">
          {startCount && (
            <CountUp start={0} end={1} duration={3} suffix="+" />
          )}
        </div>
        <p>companies</p>
        <p>Work</p>
      </div>
    </div>
    </div>
  );
};

export default Experience;
