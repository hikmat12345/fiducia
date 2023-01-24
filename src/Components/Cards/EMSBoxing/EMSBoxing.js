import React from 'react';
import './EMSBoxing.scss';
import {MdChevronRight } from "react-icons/md";
import EMSCard from './EMSCard/EMSCard';

function EMSBoxing() {
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollRight = slider.scrollRight - 600;
  };
  return (
    <>
      <div className='main-curousel flex' id="slider">
        <EMSCard title="EMS Boxing" 
                  para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
                  src="#"
        />
        <EMSCard title="Yoga" 
                  para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
                  src="#"/>
        <EMSCard title="Dance" 
                  para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
                  src="#"/>
        <EMSCard title="EMS Boxing" 
                  para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
                  src="#"/>
        
          <div>
            <MdChevronRight
            size={70}
            className="slider-icon-right right"
            onClick={slideRight}
            />
          </div>
      </div>
    </>
  )
}

export default EMSBoxing
